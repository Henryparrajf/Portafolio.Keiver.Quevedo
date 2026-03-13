# 📧 Guía Completa: Cómo Recibir Correos de Usuarios

## 🎯 ¿Cómo Funciona?

Cuando un usuario llena el formulario de contacto en tu sitio web:

1. **Usuario llena el formulario** → Escribe nombre, email y mensaje
2. **Click en "Enviar mensaje"** → El formulario envía los datos
3. **Datos se guardan en Supabase** → Se almacenan en la tabla `contacts`
4. **Tú recibes notificación** → Puedes ver los mensajes en el panel de Supabase
5. **Respondes al usuario** → Por email directamente

---

## 📋 Pasos para Configurar

### PASO 1: Crear Proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Click en **"Start your project"** o **"New Project"**
3. Inicia sesión con GitHub o email
4. Click en **"New Project"**
5. Completa:
   - **Name**: `portafolio-keiver`
   - **Database Password**: Crea una contraseña segura (guárdala)
   - **Region**: `South America (São Paulo)` (más cercana a Venezuela)
   - **Pricing Plan**: **Free** (0 USD/mes)
6. Click en **"Create new project"**
7. Espera 2-3 minutos mientras se crea

---

### PASO 2: Ejecutar el Código SQL

Una vez creado el proyecto:

1. En el menú lateral, click en **"SQL Editor"**
2. Click en **"New query"**
3. **Copia y pega TODO el código SQL** que está más abajo en este documento
4. Click en **"Run"** (botón verde)
5. Verás el mensaje: **"Success. No rows returned"**

---

### PASO 3: Obtener las Credenciales

1. En el menú lateral, click en **"Settings"** (⚙️)
2. Click en **"API"**
3. Copia estos dos valores:

   **Project URL**:
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```

   **anon public key** (es una clave larga):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...
   ```

---

### PASO 4: Configurar Variables en Vercel

1. Ve a [https://vercel.com](https://vercel.com)
2. Abre tu proyecto **"Asesoria.keiverQuevedo"**
3. Click en **"Settings"**
4. Click en **"Environment Variables"**
5. Agrega estas dos variables:

   **Variable 1**:
   - **Key**: `VITE_SUPABASE_URL`
   - **Value**: Pega tu Project URL
   - **Environments**: Marca todas (Production, Preview, Development)
   - Click **"Save"**

   **Variable 2**:
   - **Key**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: Pega tu anon public key
   - **Environments**: Marca todas
   - Click **"Save"**

6. Click en **"Redeploy"** para aplicar los cambios

---

### PASO 5: Activar el Cliente de Supabase

Yo voy a hacer este paso por ti en el siguiente mensaje. Solo necesitas:

1. Instalar la librería de Supabase
2. Activar el código en `src/lib/supabase.js`
3. Actualizar el formulario en `src/App.jsx`

---

## 📊 Cómo Ver los Mensajes que te Envían

### Opción 1: Panel de Supabase (Recomendado)

1. Ve a [https://supabase.com](https://supabase.com)
2. Abre tu proyecto
3. Click en **"Table Editor"** en el menú lateral
4. Click en la tabla **"contacts"**
5. Verás todos los mensajes en una tabla:
   - **name**: Nombre del usuario
   - **email**: Email del usuario
   - **message**: Mensaje completo
   - **created_at**: Fecha y hora
   - **read**: Si ya lo leíste (puedes marcarlo)

### Opción 2: Recibir Notificaciones por Email

Puedes configurar **Database Webhooks** para recibir un email cada vez que alguien envíe un mensaje:

1. En Supabase, ve a **"Database"** → **"Webhooks"**
2. Click en **"Create a new hook"**
3. Configura:
   - **Name**: `notify-new-contact`
   - **Table**: `contacts`
   - **Events**: Marca solo **"Insert"**
   - **Type**: **"HTTP Request"**
   - **URL**: Usa un servicio como [Zapier](https://zapier.com) o [Make](https://make.com) para enviar emails

---

## 🔒 Seguridad

El código SQL incluye **Row Level Security (RLS)** que:

- ✅ Permite que cualquier usuario anónimo envíe mensajes
- ✅ Solo tú (autenticado) puedes leer los mensajes
- ✅ Solo tú puedes marcar mensajes como leídos
- ✅ Solo tú puedes eliminar mensajes
- ✅ Protege contra spam y ataques

---

## 💡 Ejemplo de Uso

### Usuario en tu sitio web:
1. Llena el formulario:
   - **Nombre**: Juan Pérez
   - **Email**: juan@example.com
   - **Mensaje**: "Necesito asesoría contable para mi empresa"
2. Click en **"Enviar mensaje"**
3. Ve el mensaje: **"¡Mensaje enviado con éxito!"**

### Tú en Supabase:
1. Abres el **Table Editor**
2. Ves el nuevo mensaje de Juan Pérez
3. Copias su email: `juan@example.com`
4. Le respondes directamente desde tu correo
5. Marcas el mensaje como **"read"** en Supabase

---

## 📱 Ventajas de Este Sistema

✅ **Gratis**: Supabase Free incluye 50,000 mensajes/mes  
✅ **Seguro**: Base de datos protegida con RLS  
✅ **Rápido**: Los mensajes se guardan instantáneamente  
✅ **Organizado**: Todos los mensajes en un solo lugar  
✅ **Escalable**: Puedes agregar más funciones después  
✅ **Sin servidor de email**: No necesitas configurar SMTP  

---

## 🆘 Solución de Problemas

### "Error al enviar mensaje"
- Verifica que las variables de entorno estén en Vercel
- Verifica que el código SQL se haya ejecutado correctamente
- Revisa la consola del navegador (F12) para ver el error exacto

### "No veo los mensajes en Supabase"
- Verifica que estés viendo la tabla correcta (`contacts`)
- Verifica que el RLS esté habilitado
- Intenta enviar un mensaje de prueba desde tu sitio

### "Invalid API key"
- Verifica que copiaste la clave completa (es muy larga)
- Asegúrate de usar la clave **"anon public"**, no la "service_role"
- Verifica que no haya espacios al inicio o final

---

## 📞 Siguiente Paso

Una vez que hayas completado los PASOS 1-4, avísame y yo:

1. Instalaré la librería de Supabase
2. Activaré el código en `src/lib/supabase.js`
3. Actualizaré el formulario para que guarde los mensajes
4. Subiré los cambios a GitHub
5. Vercel desplegará automáticamente

---

## 🎉 Resultado Final

Después de configurar todo:

✅ Los usuarios podrán enviarte mensajes desde tu sitio web  
✅ Los mensajes se guardarán automáticamente en Supabase  
✅ Podrás ver todos los mensajes en el panel de Supabase  
✅ Podrás responder directamente por email  
✅ Tendrás un registro completo de todos los contactos  

---

**¿Listo para empezar? Sigue los pasos 1-4 y luego avísame para continuar.**
