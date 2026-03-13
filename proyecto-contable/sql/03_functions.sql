-- Funciones SQL
CREATE FUNCTION saludo() RETURNS text AS $$
BEGIN
    RETURN 'Hola mundo';
END;
$$ LANGUAGE plpgsql;