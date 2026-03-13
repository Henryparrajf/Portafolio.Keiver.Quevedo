// js/supabase.js - Cliente de Supabase y funciones útiles

// Verificar que la configuración existe
if (typeof SUPABASE_CONFIG === 'undefined') {
    console.error('❌ Error: No se encontró config.js. Crea el archivo con tus credenciales.');
    throw new Error('Configuración de Supabase no encontrada');
}

// Inicializar el cliente de Supabase
const supabase = supabaseJs.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.anonKey
);

console.log('✅ Cliente de Supabase inicializado');

// Función segura para manejar errores de fetch
async function safeFetch(promise) {
    try {
        const { data, error } = await promise;
        if (error) {
            console.error('Error en operación:', error);
            return { data: null, error };
        }
        return { data, error: null };
    } catch (err) {
        console.error('Excepción en fetch:', err);
        return { data: null, error: err };
    }
}

// Función para probar la conexión
async function testSupabaseConnection() {
    try {
        // Intentar obtener la versión de la API (esto siempre funciona si la conexión es correcta)
        const { error } = await supabase
            .from('_dummy')
            .select('*')
            .limit(1);
        
        // Si el error es que la tabla no existe, la conexión funciona
        if (error && error.message.includes('relation') || error?.code === 'PGRST116') {
            console.log('✅ Conexión a Supabase exitosa (el servidor responde correctamente)');
            return true;
        } else if (error) {
            console.error('❌ Error de conexión:', error.message);
            return false;
        }
    } catch (error) {
        console.error('❌ Error fatal de conexión:', error.message);
        return false;
    }
}

// Ejecutar prueba de conexión automáticamente
testSupabaseConnection();