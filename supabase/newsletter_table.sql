-- Crear tabla para suscriptores del newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL CHECK (length(email) >= 5 AND length(email) <= 254),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índice para búsquedas por email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Crear índice para suscriptores activos
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(active) WHERE active = true;

-- Habilitar Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción pública (suscripción)
CREATE POLICY "Cualquiera puede suscribirse al newsletter" 
ON newsletter_subscribers FOR INSERT 
WITH CHECK (true);

-- Política para que solo el admin pueda ver suscriptores
CREATE POLICY "Solo admin puede ver suscriptores" 
ON newsletter_subscribers FOR SELECT 
USING (false); -- Cambiar a auth.uid() = 'admin-uuid' si necesitas acceso

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at 
    BEFORE UPDATE ON newsletter_subscribers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para documentación
COMMENT ON TABLE newsletter_subscribers IS 'Tabla para almacenar suscriptores del newsletter de tips contables';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email del suscriptor (único)';
COMMENT ON COLUMN newsletter_subscribers.active IS 'Si la suscripción está activa (para unsuscribe)';
COMMENT ON COLUMN newsletter_subscribers.subscribed_at IS 'Fecha y hora de suscripción';