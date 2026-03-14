// Configuración de Supabase para el portafolio
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crear cliente solo si las variables existen
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    });
    console.log('✅ Supabase configurado correctamente');
  } catch (error) {
    console.error('❌ Error al crear cliente Supabase:', error);
  }
} else {
  console.warn('⚠️ Supabase no configurado. El formulario de contacto no funcionará.');
  console.warn('Para configurar, agrega en Vercel:');
  console.warn('- VITE_SUPABASE_URL: https://birkbiqwnojklwmgcehy.supabase.co');
  console.warn('- VITE_SUPABASE_ANON_KEY: tu-clave-anonima');
}

export { supabase };
