-- =====================================================
-- CÓDIGO SQL COMPLETO PARA SUPABASE
-- Portafolio Keiver Quevedo
-- =====================================================
-- INSTRUCCIONES:
-- 1. Abre Supabase → SQL Editor → New query
-- 2. Copia y pega TODO este código
-- 3. Click en "Run" (botón verde)
-- 4. Espera el mensaje "Success. No rows returned"
-- =====================================================

-- =====================================================
-- PASO 1: CREAR TABLAS
-- =====================================================

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) >= 2),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  message TEXT NOT NULL CHECK (char_length(message) >= 10),
  phone TEXT,
  subject TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE,
  replied BOOLEAN DEFAULT FALSE,
  ip_address INET,
  user_agent TEXT
);

-- Índices para búsqueda rápida
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(read);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Comentarios
COMMENT ON TABLE contacts IS 'Mensajes de contacto del formulario del portafolio';
COMMENT ON COLUMN contacts.name IS 'Nombre completo del usuario';
COMMENT ON COLUMN contacts.email IS 'Email del usuario (validado)';
COMMENT ON COLUMN contacts.message IS 'Mensaje del usuario (mínimo 10 caracteres)';
COMMENT ON COLUMN contacts.read IS 'Indica si el mensaje ha sido leído';
COMMENT ON COLUMN contacts.replied IS 'Indica si se ha respondido al mensaje';

-- =====================================================
-- PASO 2: HABILITAR ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Habilitar RLS en la tabla contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PASO 3: CREAR POLÍTICAS DE SEGURIDAD
-- =====================================================

-- Política 1: Permitir que usuarios anónimos inserten mensajes
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política 2: Solo usuarios autenticados pueden leer mensajes
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Política 3: Solo usuarios autenticados pueden actualizar (marcar como leído)
CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Política 4: Solo usuarios autenticados pueden eliminar
CREATE POLICY "Authenticated users can delete contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);

-- =====================================================
-- PASO 4: CREAR FUNCIÓN PARA NOTIFICACIONES (OPCIONAL)
-- =====================================================

-- Esta función se puede usar con webhooks para enviar notificaciones
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  -- Aquí puedes agregar lógica para enviar notificaciones
  -- Por ejemplo, usando pg_notify o webhooks
  PERFORM pg_notify(
    'new_contact',
    json_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'created_at', NEW.created_at
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para ejecutar la función cuando se inserta un nuevo contacto
CREATE TRIGGER on_new_contact
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();

-- =====================================================
-- PASO 5: CREAR VISTA PARA ESTADÍSTICAS (OPCIONAL)
-- =====================================================

-- Vista para ver estadísticas de mensajes
CREATE OR REPLACE VIEW contact_stats AS
SELECT
  COUNT(*) as total_messages,
  COUNT(*) FILTER (WHERE read = false) as unread_messages,
  COUNT(*) FILTER (WHERE replied = true) as replied_messages,
  COUNT(DISTINCT email) as unique_contacts,
  DATE_TRUNC('day', created_at) as date
FROM contacts
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- =====================================================
-- PASO 6: INSERTAR MENSAJE DE PRUEBA (OPCIONAL)
-- =====================================================

-- Puedes descomentar esto para insertar un mensaje de prueba
/*
INSERT INTO contacts (name, email, message)
VALUES (
  'Usuario de Prueba',
  'prueba@example.com',
  'Este es un mensaje de prueba para verificar que todo funciona correctamente.'
);
*/

-- =====================================================
-- VERIFICACIÓN: CONSULTAS ÚTILES
-- =====================================================

-- Ver todos los mensajes (ejecuta esto después de crear las tablas)
-- SELECT * FROM contacts ORDER BY created_at DESC;

-- Ver solo mensajes no leídos
-- SELECT * FROM contacts WHERE read = false ORDER BY created_at DESC;

-- Ver estadísticas
-- SELECT * FROM contact_stats;

-- Marcar un mensaje como leído (reemplaza 'id-del-mensaje' con el ID real)
-- UPDATE contacts SET read = true WHERE id = 'id-del-mensaje';

-- Marcar un mensaje como respondido
-- UPDATE contacts SET replied = true WHERE id = 'id-del-mensaje';

-- Eliminar un mensaje
-- DELETE FROM contacts WHERE id = 'id-del-mensaje';

-- =====================================================
-- FIN DEL CÓDIGO SQL
-- =====================================================

-- ✅ Si todo salió bien, deberías ver:
-- "Success. No rows returned"
--
-- ✅ Ahora puedes:
-- 1. Ir a "Table Editor" → "contacts" para ver la tabla
-- 2. Configurar las variables de entorno en Vercel
-- 3. Activar el código en tu aplicación
--
-- ✅ Para probar:
-- 1. Envía un mensaje desde tu sitio web
-- 2. Ve a "Table Editor" → "contacts"
-- 3. Deberías ver el mensaje guardado
--
-- =====================================================
