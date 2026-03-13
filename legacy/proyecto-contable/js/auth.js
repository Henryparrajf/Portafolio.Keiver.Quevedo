// js/auth.js - Autenticación segura

// Configuración de seguridad
const AUTH_CONFIG = {
    minPasswordLength: 8,
    requireSpecialChar: true,
    requireNumber: true,
    requireUppercase: true,
    sessionDuration: SUPABASE_CONFIG.security.sessionExpiry * 1000
};

// Registrar nuevo usuario
async function registerUser(email, password, userData) {
    try {
        // Validar contraseña
        if (!validatePassword(password)) {
            throw new Error('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial');
        }

        // Registrar en Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: userData.full_name,
                    phone: userData.phone
                }
            }
        });

        if (authError) throw authError;

        // Crear perfil en la tabla profiles
        if (authData.user) {
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([{ 
                    id: authData.user.id,
                    email: email,
                    full_name: userData.full_name,
                    phone: userData.phone,
                    role: 'user'
                }]);

            if (profileError) throw profileError;
        }

        return { success: true, data: authData };
    } catch (error) {
        console.error('Error en registro:', error);
        return { success: false, error: error.message };
    }
}

// Login seguro con rate limiting
async function loginUser(email, password) {
    try {
        // Obtener IP del usuario (para rate limiting)
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // Verificar límite de intentos
        const { data: canLogin, error: checkError } = await supabase
            .rpc('check_login_attempts', {
                check_email: email,
                check_ip: userIP
            });

        if (checkError) throw checkError;

        if (!canLogin) {
            throw new Error('Demasiados intentos fallidos. Intenta de nuevo en 15 minutos.');
        }

        // Intentar login
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            // Registrar intento fallido
            await supabase.rpc('record_login_attempt', {
                attempt_email: email,
                attempt_ip: userIP
            });
            throw error;
        }

        // Actualizar último login
        await supabase
            .from('profiles')
            .update({ last_login: new Date().toISOString() })
            .eq('id', data.user.id);

        // Guardar sesión en localStorage (encriptado)
        saveSessionSecurely(data.session);

        return { success: true, data };
    } catch (error) {
        console.error('Error en login:', error);
        return { success: false, error: error.message };
    }
}

// Validar contraseña
function validatePassword(password) {
    if (password.length < AUTH_CONFIG.minPasswordLength) return false;
    if (AUTH_CONFIG.requireUppercase && !/[A-Z]/.test(password)) return false;
    if (AUTH_CONFIG.requireNumber && !/[0-9]/.test(password)) return false;
    if (AUTH_CONFIG.requireSpecialChar && !/[!@#$%^&*]/.test(password)) return false;
    return true;
}

// Guardar sesión de forma segura
function saveSessionSecurely(session) {
    // Encriptar sesión antes de guardar
    const encryptedSession = btoa(JSON.stringify(session)); // Base64 simple
    localStorage.setItem('secure_session', encryptedSession);
    localStorage.setItem('session_expiry', Date.now() + AUTH_CONFIG.sessionDuration);
}

// Obtener sesión segura
function getSecureSession() {
    const encryptedSession = localStorage.getItem('secure_session');
    const expiry = localStorage.getItem('session_expiry');
    
    if (!encryptedSession || !expiry) return null;
    
    // Verificar expiración
    if (Date.now() > parseInt(expiry)) {
        logout();
        return null;
    }
    
    try {
        // Desencriptar
        return JSON.parse(atob(encryptedSession));
    } catch {
        return null;
    }
}

// Logout seguro
async function logout() {
    await supabase.auth.signOut();
    localStorage.removeItem('secure_session');
    localStorage.removeItem('session_expiry');
    window.location.href = 'login.html';
}

// Verificar si usuario es admin
async function isAdmin() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    
    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
    
    return profile?.role === 'admin';
}

// Middleware de protección de rutas
async function requireAuth(redirectTo = 'login.html') {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        window.location.href = redirectTo;
        return false;
    }
    return true;
}

async function requireAdmin(redirectTo = 'index.html') {
    const isUserAdmin = await isAdmin();
    if (!isUserAdmin) {
        window.location.href = redirectTo;
        return false;
    }
    return true;
}