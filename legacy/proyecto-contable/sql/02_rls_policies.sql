-- Políticas de seguridad
-- (ejemplo básico)
ALTER TABLE servicios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "solo_admin" ON servicios
    FOR SELECT USING (auth.role() = 'admin');