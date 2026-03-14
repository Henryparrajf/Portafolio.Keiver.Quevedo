-- =====================================================
-- LIMPIAR Y RECREAR TABLA CONTACTS
-- Usa este código si necesitas empezar de cero
-- =====================================================

-- PASO 1: ELIMINAR TODO (si existe)
DROP TRIGGER IF EXISTS on_new_contact ON contacts;
DROP FUNCTION IF EXISTS notify_new_contact();
DROP VIEW IF EXISTS contact_stats;
DROP POLICY IF EXISTS "Anyone can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can read contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON contacts;
DROP TABLE IF EXISTS contacts;

-- PASO 2: CREAR TABLA DESDE CERO
CREATE TABLE contacts (
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

-- Índices
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_read ON contacts(read);
CREATE INDEX idx_contacts_email ON contacts(email);

-- Comentarios
COMMENT ON TABLE contacts IS 'Mensajes de contacto del formulario del portafolio';

-- PASO 3: HABILITAR RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- PASO 4: CREAR POLÍTICAS
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);

-- =====================================================
-- ✅ LISTO - Tabla recreada desde cero
-- =====================================================
