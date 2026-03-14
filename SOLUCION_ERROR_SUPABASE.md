# 🔧 Solución: Error "supabaseUrl is required"

## ❌ Error que estás viendo:

```
⚠️ Supabase no configurado. Verifica las variables de entorno en Vercel.
Uncaught Error: supabaseUrl is required.
```

## 🎯 Causa:

Las variables de entorno NO están cargadas. Esto pasa porque:
- **Localmente**: Vite no detectó el archivo `.env`
- **En Vercel**: Las variables NO están configuradas

---

## ✅ SOLUCIÓN RÁPIDA (Local)

### Paso 1: Detener el servidor

Si tienes `npm run dev` corriendo:
1. Presiona `Ctrl + C` en la terminal
2. Espera a que se detenga completamente

### Paso 2: Reiniciar el servidor

```bash
npm run dev
```

### Paso 3: Verificar en el navegador

1. Abre http://localhost:5173
2. Abre la consola del navegador (F12)
3. Ya NO deberías ver el error

### Paso 4: Probar el formulario

1. Ve a la sección "Contáctame"
2. Llena el formulario:
   - Nombre: Prueba
   - Email: prueba@test.com
   - Mensaje: Este es un mensaje de prueba
3. Click "Enviar mensaje"
4. Deberías ver: "¡Mensaje enviado con éxito!"

### Paso 5: Verificar en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Abre tu proyecto: "Asesoria.keiverQuevedo"
3. Click en "Table Editor"
4. Click en la tabla "contacts"
5. Deberías ver el mensaje guardado

---

## ✅ SOLUCIÓN PARA VERCEL (Producción)

### Paso 1: Ir a Vercel

1. Abre [https://vercel.com](https://vercel.com)
2. Inicia sesión
3. Abre tu proyecto: "Asesoria.keiverQuevedo"

### Paso 2: Configurar Variables

1. Click en **"Settings"** (menú superior)
2. Click en **"Environment Variables"** (menú lateral)
3. Click en **"Add New"**

**Variable 1**:
- **Key**: `VITE_SUPABASE_URL`
- **Value**: `https://birkbiqwnojklwmgcehy.supabase.co`
- **Environments**: ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

**Variable 2**:
- **Key**: `VITE_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I`
- **Environments**: ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

### Paso 3: Redesplegar

1. Ve a **"Deployments"** (menú superior)
2. Busca el último despliegue (el primero de la lista)
3. Click en los 3 puntos **"..."** al lado derecho
4. Click en **"Redeploy"**
5. Confirma haciendo click en **"Redeploy"** nuevamente
6. Espera 1-2 minutos

### Paso 4: Verificar

1. Una vez que termine el despliegue, verás "Ready"
2. Click en **"Visit"** para abrir tu sitio
3. Ve a la sección "Contáctame"
4. Envía un mensaje de prueba
5. Verifica en Supabase que se guardó

---

## 🔍 Verificar Variables de Entorno

### En Local:

Verifica que el archivo `.env.local` existe:

```bash
# Windows
type .env.local

# Mac/Linux
cat .env.local
```

Deberías ver:
```
VITE_SUPABASE_URL=https://birkbiqwnojklwmgcehy.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### En Vercel:

1. Ve a Settings → Environment Variables
2. Deberías ver 2 variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

## 🆘 Si el Error Persiste

### Problema 1: Variables no se cargan localmente

**Solución**:
1. Verifica que el archivo se llame exactamente `.env.local`
2. Verifica que esté en la raíz del proyecto (no en `src/`)
3. Reinicia el servidor completamente:
   ```bash
   # Detener con Ctrl+C
   npm run dev
   ```

### Problema 2: Variables no se cargan en Vercel

**Solución**:
1. Verifica que las variables estén en Vercel
2. Verifica que tengan los nombres EXACTOS:
   - `VITE_SUPABASE_URL` (con VITE_ al inicio)
   - `VITE_SUPABASE_ANON_KEY` (con VITE_ al inicio)
3. Verifica que estén marcadas para Production
4. Redesplega el proyecto

### Problema 3: Error en la consola del navegador

**Solución**:
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Si ves "supabaseUrl is required", las variables NO están cargadas
5. Reinicia el servidor local

---

## 📋 Checklist de Verificación

### Local:
- [ ] Archivo `.env.local` existe en la raíz
- [ ] Archivo contiene las 2 variables
- [ ] Servidor reiniciado con `npm run dev`
- [ ] No hay errores en la consola del navegador
- [ ] Formulario envía mensajes correctamente

### Vercel:
- [ ] Variables agregadas en Settings → Environment Variables
- [ ] Nombres correctos: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
- [ ] Marcadas para Production, Preview y Development
- [ ] Proyecto redesplegado
- [ ] Despliegue completado (estado "Ready")
- [ ] Formulario funciona en el sitio de producción

---

## 🎯 Resumen

**El error ocurre porque**:
- Las variables de entorno NO están cargadas

**Solución local**:
1. Reinicia el servidor: `Ctrl+C` → `npm run dev`

**Solución Vercel**:
1. Agrega las 2 variables en Settings
2. Redesplega el proyecto

---

**¿El error persiste? Avísame y te ayudo a diagnosticar el problema específico.**
