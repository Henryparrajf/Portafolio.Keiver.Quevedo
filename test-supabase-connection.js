// Script para probar conexión a Supabase
const SUPABASE_URL = 'https://birkbiqwnojklwmgcehy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I';

console.log('🔍 Probando conexión a Supabase...');
console.log('URL:', SUPABASE_URL);
console.log('Key (primeros 20 chars):', SUPABASE_ANON_KEY.substring(0, 20) + '...');

// Probar conexión básica
async function testConnection() {
  try {
    // Probar endpoint de health check
    const healthResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    
    console.log('📊 Health Check Status:', healthResponse.status);
    
    if (healthResponse.ok) {
      console.log('✅ Conexión básica exitosa');
      
      // Probar tabla contacts
      const contactsResponse = await fetch(`${SUPABASE_URL}/rest/v1/contacts?select=count`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'count=exact'
        }
      });
      
      console.log('📊 Contacts Table Status:', contactsResponse.status);
      
      if (contactsResponse.ok) {
        const count = contactsResponse.headers.get('content-range');
        console.log('✅ Tabla contacts existe y es accesible');
        console.log('📈 Conteo de registros:', count || 'No disponible');
      } else if (contactsResponse.status === 404) {
        console.log('⚠️ Tabla contacts no existe o no es accesible');
        console.log('💡 Verificar:');
        console.log('1. Tabla "contacts" creada en Supabase');
        console.log('2. Políticas RLS habilitadas');
        console.log('3. Permisos de inserción para rol anon');
      } else {
        console.log('❌ Error al acceder a tabla contacts:', contactsResponse.status);
      }
    } else {
      console.log('❌ Error en health check:', healthResponse.status);
      console.log('💡 Posibles causas:');
      console.log('1. URL incorrecta');
      console.log('2. Key inválida o expirada');
      console.log('3. Proyecto deshabilitado');
    }
    
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
    console.log('💡 Verificar:');
    console.log('1. Conexión a internet');
    console.log('2. Firewall/antivirus');
    console.log('3. URL accesible desde tu red');
  }
}

// Ejecutar prueba
testConnection();