# 🚀 Configurar Variables de Supabase en Vercel

## ✅ Credenciales de Supabase

Ya tienes tu proyecto de Supabase configurado:

- **Proyecto**: Asesoria.keiverQuevedo
- **ID**: birkbiqwnojklwmgcehy
- **URL**: https://birkbiqwnojklwmgcehy.supabase.co

---

## 📋 Pasos para Configurar en Vercel

### Paso 1: Ir a Vercel

1. Abre [https://vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta
3. Busca tu proyecto: **"Asesoria.keiverQuevedo"**
4. Click en el proyecto para abrirlo

---

### Paso 2: Abrir Configuración

1. En el menú superior, click en **"Settings"** (Configuración)
2. En el menú lateral izquierdo, click en **"Environment Variables"** (Variables de entorno)

---

### Paso 3: Agregar Primera Variable

1. Click en el botón **"Add New"** o **"Add Variable"**

2. **Completa los campos**:
   - **Key** (Nombre): `VITE_SUPABASE_URL`
   - **Value** (Valor): `https://birkbiqwnojklwmgcehy.supabase.co`
   - **Environments** (Entornos): Marca las 3 opciones:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

3. Click en **"Save"** (Guardar)

---

### Paso 4: Agregar Segunda Variable

1. Click nuevamente en **"Add New"** o **"Add Variable"**

2. **Completa los campos**:
   - **Key** (Nombre): `VITE_SUPABASE_ANON_KEY`
   - **Value** (Valor): `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I`
   - **Environments** (Entornos): Marca las 3 opciones:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

3. Click en **"Save"** (Guardar)

---

### Paso 5: Redesplegar el Proyecto

Después de agregar las variables, necesitas redesplegar:

1. Ve a la pestaña **"Deployments"** (Despliegues)
2. Busca el último despliegue (el primero de la lista)
3. Click en los tres puntos **"..."** al lado derecho
4. Click en **"Redeploy"** (Redesplegar)
5. Confirma haciendo click en **"Redeploy"** nuevamente

---

## ✅ Verificar que Funciona

### Opción 1: Ver en Vercel

1. Espera 1-2 minutos mientras se despliega
2. Verás el estado cambiar a **"Ready"** (Listo)
3. Click en **"Visit"** (Visitar) para abrir tu sitio

### Opción 2: Probar el formulario

1. Abre tu sitio web
2. Ve a la sección **"Contáctame"**
3. Llena el formulario con datos de prueba:
   - Nombre: Prueba
   - Email: prueba@test.com
   - Mensaje: Este es un mensaje de prueba
4. Click en **"Enviar mensaje"**
5. Deberías ver: **"¡Mensaje enviado con éxito!"**

### Opción 3: Ver en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Abre tu proyecto **"Asesoria.keiverQuevedo"**
3. Click en **"Table Editor"** en el menú lateral
4. Click en la tabla **"contacts"**
5. Deberías ver el mensaje de prueba guardado

---

## 📸 Capturas de Pantalla de Referencia

### Cómo se ve en Vercel:

```
Settings → Environment Variables

┌─────────────────────────────────────────────────────┐
│ Environment Variables                                │
├─────────────────────────────────────────────────────┤
│                                                      │
│ VITE_SUPABASE_URL                                   │
│ https://birkbiqwnojklwmgcehy.supabase.co           │
│ Production, Preview, Development                     │
│                                                      │
│ VITE_SUPABASE_ANON_KEY                              │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...            │
│ Production, Preview, Development                     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 🔒 Seguridad

### ✅ Estas claves son seguras para usar en el frontend

- La clave **ANON_KEY** es pública y está diseñada para usarse en el navegador
- Supabase usa **Row Level Security (RLS)** para proteger los datos
- Solo las operaciones permitidas por las políticas RLS funcionarán

### ❌ NUNCA compartas estas claves:

- **service_role key** (clave de servicio) - Esta SÍ es privada
- **Database password** (contraseña de la base de datos)

---

## 🆘 Solución de Problemas

### Error: "Invalid API key"

**Solución**:
1. Verifica que copiaste la clave completa (es muy larga)
2. Asegúrate de no tener espacios al inicio o final
3. Verifica que el nombre sea exactamente `VITE_SUPABASE_ANON_KEY`

### Error: "Failed to fetch"

**Solución**:
1. Verifica que la URL sea correcta: `https://birkbiqwnojklwmgcehy.supabase.co`
2. Asegúrate de haber redesplegado después de agregar las variables
3. Espera 2-3 minutos para que el despliegue termine

### El formulario no guarda mensajes

**Solución**:
1. Verifica que ejecutaste el código SQL en Supabase
2. Ve a Supabase → SQL Editor y ejecuta el código de `supabase/CODIGO_SQL_COMPLETO.sql`
3. Verifica que la tabla `contacts` exista en Table Editor

---

## 📞 Siguiente Paso

Una vez que hayas configurado las variables en Vercel:

1. ✅ Espera a que se complete el redespliegue
2. ✅ Prueba el formulario de contacto
3. ✅ Verifica en Supabase que los mensajes se guarden
4. ✅ ¡Listo! Tu sitio está completamente funcional

---

## 🎉 Resumen

**Variables agregadas**:
- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

**Próximo paso**:
- Activar el código de Supabase en el proyecto (yo lo haré)

---

**¿Necesitas ayuda? Avísame cuando hayas agregado las variables en Vercel para continuar.**
