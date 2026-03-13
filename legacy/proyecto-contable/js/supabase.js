// js/supabase.js - Cliente Supabase con seguridad mejorada

// Verificar configuración
if (typeof SUPABASE_CONFIG === 'undefined') {
    throw new Error('Configuración de Supabase no encontrada. Crea js/config.js basado en config.example.js');
}

// Crear cliente con opciones de seguridad
const supabase = supabaseJs.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.anonKey,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true,
            storage: {
                getItem: (key) => {
                    // Usar localStorage seguro
                    return localStorage.getItem(key);
                },
                setItem: (key, value) => {
                    localStorage.setItem(key, value);
                },
                removeItem: (key) => {
                    localStorage.removeItem(key);
                }
            }
        },
        global: {
            headers: {
                'x-application-name': 'contapp'
            }
        }
    }
);

console.log('✅ Cliente de Supabase inicializado con seguridad');

// Función segura con reintentos
async function safeFetch(promise, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const { data, error } = await promise;
            if (error) {
                // Si es error de autenticación, redirigir
                if (error.status === 401) {
                    window.location.href = 'login.html';
                    return { data: null, error };
                }
                return { data: null, error };
            }
            return { data, error: null };
        } catch (err) {
            if (i === retries - 1) {
                console.error('Error después de reintentos:', err);
                return { data: null, error: err };
            }
            // Esperar antes de reintentar (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
        }
    }
}

// Función para sanitizar datos de entrada
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}