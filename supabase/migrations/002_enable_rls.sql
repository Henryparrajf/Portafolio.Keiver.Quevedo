-- =====================================================
-- Migración 002: Row Level Security (RLS)
-- Descripción: Políticas de seguridad para todas las tablas
-- Fecha: 2026-03-13
-- =====================================================

-- HABILITAR RLS EN TODAS LAS TABLAS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- POLÍTICAS PARA TABLA: contacts
-- =====================================================

-- Permitir que usuarios anónimos inserten mensajes de contacto
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Solo usuarios autenticados pueden leer mensajes
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Solo usuarios autenticados pueden actualizar (marcar como leído)
CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Solo usuarios autenticados pueden eliminar
CREATE POLICY "Authenticated users can delete contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);

-- =====================================================
-- POLÍTICAS PARA TABLA: projects
-- =====================================================

-- Permitir lectura pública de proyectos activos
CREATE POLICY "Anyone can read active projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

-- Solo usuarios autenticados pueden insertar proyectos
CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Solo usuarios autenticados pueden actualizar proyectos
CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Solo usuarios autenticados pueden eliminar proyectos
CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- =====================================================
-- POLÍTICAS PARA TABLA: analytics
-- =====================================================

-- Permitir que cualquiera inserte eventos de analytics
CREATE POLICY "Anyone can insert analytics"
  ON analytics
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Solo usuarios autenticados pueden leer analytics
CREATE POLICY "Authenticated users can read analytics"
  ON analytics
  FOR SELECT
  TO authenticated
  USING (true);

-- =====================================================
-- POLÍTICAS PARA TABLA: skills
-- =====================================================

-- Permitir lectura pública de habilidades visibles
CREATE POLICY "Anyone can read visible skills"
  ON skills
  FOR SELECT
  TO anon, authenticated
  USING (visible = true);

-- Solo usuarios autenticados pueden modificar habilidades
CREATE POLICY "Authenticated users can manage skills"
  ON skills
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- Fin de la migración 002
-- =====================================================
