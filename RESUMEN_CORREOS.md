# 📧 Resumen: Sistema de Correos

## 🎯 ¿Cómo Funciona?

```
Usuario en tu sitio web
        ↓
Llena formulario (nombre, email, mensaje)
        ↓
Click "Enviar mensaje"
        ↓
Datos se guardan en Supabase
        ↓
Tú ves el mensaje en el panel de Supabase
        ↓
Respondes por email directamente
```

---

## 📋 Pasos Rápidos

### 1️⃣ Crear Proyecto en Supabase
- Ve a [supabase.com](https://supabase.com)
- Click "New Project"
- Nombre: `portafolio-keiver`
- Region: `South America (São Paulo)`
- Plan: **Free**

### 2️⃣ Ejecutar Código SQL
- Abre **SQL Editor** en Supabase
- Copia y pega el código de `supabase/CODIGO_SQL_COMPLETO.sql`
- Click **"Run"**

### 3️⃣ Copiar Credenciales
En Supabase → Settings → API, copia:
- **Project URL**: `https://xxxxx.supabase.co`
- **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6...`

### 4️⃣ Configurar en Vercel
En Vercel → Settings → Environment Variables, agrega:
- `VITE_SUPABASE_URL` = tu Project URL
- `VITE_SUPABASE_ANON_KEY` = tu anon key

### 5️⃣ Activar Código (yo lo hago)
- Instalar librería de Supabase
- Activar `src/lib/supabase.js`
- Actualizar formulario en `src/App.jsx`

---

## 📊 Ver Mensajes

### En Supabase:
1. Abre tu proyecto en [supabase.com](https://supabase.com)
2. Click **"Table Editor"**
3. Click tabla **"contacts"**
4. Verás todos los mensajes en una tabla

### Columnas importantes:
- **name**: Nombre del usuario
- **email**: Email del usuario
- **message**: Mensaje completo
- **created_at**: Fecha y hora
- **read**: Si ya lo leíste (puedes marcarlo)

---

## 📁 Archivos Importantes

### Para ti:
- `GUIA_CORREOS.md` → Guía completa paso a paso
- `supabase/CODIGO_SQL_COMPLETO.sql` → Código SQL para copiar y pegar

### Migraciones SQL (ya existen):
- `supabase/migrations/001_create_tables.sql` → Crea las tablas
- `supabase/migrations/002_enable_rls.sql` → Configura seguridad

---

## 🔒 Seguridad

✅ Usuarios anónimos pueden **enviar** mensajes  
✅ Solo tú (autenticado) puedes **leer** mensajes  
✅ Solo tú puedes **marcar como leído**  
✅ Solo tú puedes **eliminar** mensajes  
❌ Nadie más puede ver los mensajes  

---

## 💰 Costo

**GRATIS** con Supabase Free:
- 50,000 mensajes por mes
- 500 MB de base de datos
- 1 GB de almacenamiento
- Más que suficiente para un portafolio

---

## 🎉 Resultado Final

Después de configurar:

✅ Formulario funcional en tu sitio web  
✅ Mensajes guardados automáticamente  
✅ Panel para ver todos los mensajes  
✅ Emails de usuarios para responder  
✅ Sistema profesional y seguro  

---

## 📞 Siguiente Paso

**Completa los pasos 1-4** y luego avísame para que yo:
1. Instale la librería de Supabase
2. Active el código
3. Actualice el formulario
4. Suba los cambios a GitHub

---

**Lee la guía completa en**: `GUIA_CORREOS.md`  
**Código SQL para copiar**: `supabase/CODIGO_SQL_COMPLETO.sql`
