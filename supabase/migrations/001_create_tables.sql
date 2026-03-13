-- =====================================================
-- Migración 001: Crear Tablas Principales
-- Descripción: Tablas para contactos, proyectos y analytics
-- Fecha: 2026-03-13
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
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_read ON contacts(read);
CREATE INDEX idx_contacts_email ON contacts(email);

-- Comentarios
COMMENT ON TABLE contacts IS 'Mensajes de contacto del formulario del portafolio';
COMMENT ON COLUMN contacts.read IS 'Indica si el mensaje ha sido leído';
COMMENT ON COLUMN contacts.replied IS 'Indica si se ha respondido al mensaje';

-- =====================================================

-- Tabla de proyectos del portafolio
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL CHECK (char_length(title) >= 3),
  description TEXT,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  link_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'archived', 'draft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_projects_featured ON projects(featured) WHERE featured = TRUE;
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_order ON projects(order_index);

-- Comentarios
COMMENT ON TABLE projects IS 'Proyectos mostrados en el portafolio';
COMMENT ON COLUMN projects.featured IS 'Proyectos destacados que aparecen primero';
COMMENT ON COLUMN projects.order_index IS 'Orden de visualización (menor = primero)';

-- =====================================================

-- Tabla de analytics (opcional)
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip_address INET,
  country TEXT,
  city TEXT,
  device_type TEXT CHECK (device_type IN ('desktop', 'mobile', 'tablet', 'unknown')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para análisis
CREATE INDEX idx_analytics_page ON analytics(page);
CREATE INDEX idx_analytics_created_at ON analytics(created_at DESC);
CREATE INDEX idx_analytics_country ON analytics(country);

-- Comentarios
COMMENT ON TABLE analytics IS 'Tracking básico de visitas al portafolio';

-- =====================================================

-- Tabla de habilidades (opcional)
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL CHECK (category IN ('technical', 'accounting', 'tools', 'soft')),
  level INTEGER CHECK (level >= 1 A
ND level <= 5),
  icon TEXT,
  order_index INTEGER DEFAULT 0,
  visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_visible ON skills(visible) WHERE visible = TRUE;

-- Comentarios
COMMENT ON TABLE skills IS 'Habilidades técnicas y profesionales';
COMMENT ON COLUMN skills.level IS 'Nivel de dominio: 1=Básico, 5=Experto';

-- =====================================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para projects
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Fin de la migración 001
-- =====================================================
