# Configurar Supabase en Vercel - Solución de Error

## 🔴 **Error Actual**
```
⚠️ Supabase no configurado. Verifica las variables de entorno en Vercel.
Uncaught Error: supabaseUrl is required
```

## 🎯 **Causa del Problema**
Las variables de entorno `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` están definidas en `.env.local` (desarrollo local) pero **NO están configuradas en Vercel** (producción).

## ✅ **Solución Paso a Paso**

### **Paso 1: Obtener Credenciales de Supabase**
1. Ir a https://supabase.com/dashboard
2. Seleccionar proyecto: `Asesoria.keiverQuevedo` (ID: birkbiqwnojklwmgcehy)
3. Ir a **Settings > API**
4. Copiar:
   - **URL**: `https://birkbiqwnojklwmgcehy.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I`

### **Paso 2: Configurar Variables en Vercel**
1. Ir a https://vercel.com/dashboard
2. Seleccionar proyecto: `Asesoria.keiverQuevedo`
3. Ir a **Settings > Environment Variables**
4. Agregar las siguientes variables:

```
Nombre: VITE_SUPABASE_URL
Valor: https://birkbiqwnojklwmgcehy.supabase.co
```

```
Nombre: VITE_SUPABASE_ANON_KEY
Valor: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I
```

5. Hacer clic en **Save**
6. **Re-deploy** el proyecto (ir a Deployments > Latest > Redeploy)

### **Paso 3: Verificar Configuración**
1. Después del redeploy, visitar: https://keiverquevedo.com
2. Abrir DevTools (F12) > Console
3. Verificar que NO aparece el error de Supabase
4. Probar el formulario de contacto

## 🔧 **Mejoras en el Código (Opcional)**

### **1. Mejor Manejo de Errores**
Modificar `src/lib/supabase.js` para manejar mejor la ausencia de variables:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crear cliente solo si las variables existen
let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
} else {
  console.warn('⚠️ Supabase no configurado. El formulario de contacto no funcionará.');
}

export { supabase };
```

### **2. Validación en el Formulario**
Modificar `src/App.jsx` para deshabilitar el formulario si Supabase no está configurado:

```javascript
const handleContactSubmit = async (event) => {
  event.preventDefault();
  
  // Verificar si Supabase está configurado
  if (!supabase) {
    alert('El sistema de contacto no está disponible temporalmente. Por favor, escríbeme directamente a keiver30@gmail.com');
    return;
  }
  
  // Resto del código...
};
```

## 📋 **Verificación de Variables**

### **Variables Requeridas en Vercel**
```
✅ VITE_SUPABASE_URL = https://birkbiqwnojklwmgcehy.supabase.co
✅ VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### **Variables Opcionales (Recomendadas)**
```
VITE_APP_NAME = Portafolio Keiver Quevedo
VITE_APP_URL = https://keiverquevedo.com
VITE_CONTACT_EMAIL = keiver30@gmail.com
```

## 🚨 **Problemas Comunes**

### **1. Variables no se aplican después del deploy**
- **Solución**: Hacer redeploy manual después de agregar variables

### **2. Key expirada**
- **Solución**: Generar nueva anon key en Supabase Dashboard > Settings > API

### **3. URL incorrecta**
- **Solución**: Verificar que la URL termine en `.supabase.co`

### **4. Permisos de RLS (Row Level Security)**
- **Solución**: Verificar que la tabla `contacts` tenga políticas RLS habilitadas:
```sql
-- En Supabase SQL Editor
CREATE POLICY "Cualquiera puede insertar contactos" 
ON contacts FOR INSERT 
WITH CHECK (true);
```

## 🔍 **Debug en Producción**

### **1. Verificar Variables en Runtime**
```javascript
// En DevTools Console
console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
```

### **2. Probar Conexión Directa**
```javascript
// En DevTools Console
fetch('https://birkbiqwnojklwmgcehy.supabase.co/rest/v1/contacts', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
})
.then(r => console.log('Status:', r.status))
.catch(e => console.error('Error:', e));
```

## 📊 **Monitoreo**

### **Supabase Dashboard**
1. Ir a https://supabase.com/dashboard/project/birkbiqwnojklwmgcehy
2. Revisar:
   - **Database > Tables**: Ver inserts en `contacts`
   - **Authentication > Logs**: Ver intentos de conexión
   - **API > Logs**: Ver requests a la API

### **Vercel Logs**
1. Ir a https://vercel.com/dashboard
2. Proyecto > Deployments > Latest > Logs
3. Buscar errores relacionados con Supabase

## ✅ **Checklist de Verificación**

- [ ] Variables agregadas en Vercel Settings > Environment Variables
- [ ] Redeploy realizado después de agregar variables
- [ ] Error desaparece en Console de producción
- [ ] Formulario de contacto funciona
- [ ] Datos se guardan en Supabase
- [ ] Email de confirmación se muestra al usuario

## 🆘 **Soporte**

### **Si el problema persiste:**
1. **Contactar Soporte Vercel**: https://vercel.com/support
2. **Foro Supabase**: https://github.com/supabase/supabase/discussions
3. **Documentación**: 
   - https://supabase.com/docs/guides/getting-started
   - https://vercel.com/docs/projects/environment-variables

### **Contacto Directo:**
- **Email**: keiver30@gmail.com
- **WhatsApp**: +58 4126722754
- **Desarrollador**: Henry Parra (Full Stack Developer)

---

**Nota**: Este error solo afecta el formulario de contacto. El resto del sitio (SEO, testimonios, diseño) funciona correctamente.