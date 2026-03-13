# 🚀 Guía de Despliegue en Vercel

## ✅ Estado Actual

Todos los cambios han sido subidos exitosamente a la rama `main` en GitHub.

**Commits realizados**:
- `c4e6bd8` - Reorganización completa del proyecto
- `de72acd` - Archivos de documentación y configuración
- `46dd609` - Migraciones SQL de Supabase

---

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de tener:

- [x] Cuenta en GitHub (ya tienes el repo)
- [ ] Cuenta en Vercel (gratis en vercel.com)
- [ ] Cuenta en Supabase (opcional, gratis en supabase.com)

---

## 🎯 Opción 1: Despliegue Automático (Recomendado)

### Paso 1: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up" o "Log In"
3. Conecta con tu cuenta de GitHub
4. Click en "New Project"
5. Busca el repositorio: `Asesoria.keiverQuevedo`
6. Click en "Import"

### Paso 2: Configuración Automática

Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

**No necesitas cambiar nada**, el archivo `vercel.json` ya tiene toda la configuración.

### Paso 3: Variables de Entorno (Opcional)

Si vas a usar Supabase:

1. En Vercel, ve a "Settings" → "Environment Variables"
2. Agrega estas variables:

```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-publica
```

### Paso 4: Deploy

1. Click en "Deploy"
2. Espera 1-2 minutos
3. ¡Listo! Tu sitio estará en línea

**URL del sitio**: `https://asesoria-keiver-quevedo.vercel.app` (o similar)

---

## 🎯 Opción 2: Despliegue con CLI

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login

```bash
vercel login
```

### Paso 3: Deploy Preview

```bash
vercel
```

### Paso 4: Deploy a Producción

```bash
vercel --prod
```

---

## 🗄️ Configurar Supabase (Opcional)

### Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Click en "New Project"
3. Completa:
   - Name: `portafolio-keiver-quevedo`
   - Database Password: (guárdalo)
   - Region: Más cercana a ti
4. Click en "Create new project"

### Paso 2: Ejecutar Migraciones SQL

1. En Supabase, ve a "SQL Editor"
2. Click en "New query"
3. Copia el contenido de `supabase/migrations/001_create_tables.sql`
4. Pega y click en "Run"
5. Repite con `002_enable_rls.sql`

### Paso 3: Obtener Credenciales

1. Ve a "Settings" → "API"
2. Copia:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NI...`

### Paso 4: Configurar en Vercel

1. En Vercel, ve a tu proyecto
2. "Settings" → "Environment Variables"
3. Agrega:
   - `VITE_SUPABASE_URL` = tu URL
   - `VITE_SUPABASE_ANON_KEY` = tu clave
4. Click en "Save"
5. Redeploy el proyecto

### Paso 5: Activar Cliente en el Código

1. Instala el cliente:
   ```bash
   npm install @supabase/supabase-js
   ```

2. Edita `src/lib/supabase.js`:
   - Descomenta el código real
   - Comenta el mock

3. Commit y push:
   ```bash
   git add src/lib/supabase.js package.json package-lock.json
   git commit -m "feat: Activar cliente de Supabase"
   git push origin main
   ```

4. Vercel desplegará automáticamente

---

## ✅ Verificación Post-Despliegue

### Checklist Básico

- [ ] Sitio accesible en la URL de Vercel
- [ ] No hay errores 404
- [ ] Página principal carga correctamente
- [ ] Imágenes y assets cargan
- [ ] Navegación funciona (scroll suave)
- [ ] Links internos funcionan (#proyectos, #contacto)
- [ ] Tema oscuro/claro funciona
- [ ] Formulario de contacto muestra alert (o funciona con Supabase)

### Checklist Avanzado (con Supabase)

- [ ] Variables de entorno configuradas
- [ ] Cliente de Supabase conectado
- [ ] Formulario de contacto guarda en DB
- [ ] No hay errores en la consola del navegador
- [ ] Políticas RLS funcionan correctamente

---

## 🔧 Configuración Avanzada de Vercel

### Dominios Personalizados

1. Ve a "Settings" → "Domains"
2. Click en "Add"
3. Ingresa tu dominio (ej: `keiverquevedo.com`)
4. Sigue las instrucciones para configurar DNS

### Redirects y Rewrites

Ya están configurados en `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que el SPA routing funcione correctamente.

### Headers de Cache

Ya están configurados en `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Error: "Build failed"

**Causa**: Dependencias no instaladas o error en el código

**Solución**:
1. Revisa los logs de Vercel
2. Verifica que `package.json` esté correcto
3. Prueba el build localmente: `npm run build`

### Error: "404 on page refresh"

**Causa**: SPA routing no configurado

**Solución**: Ya está configurado en `vercel.json`, pero verifica que el archivo esté en la raíz del repo.

### Error: "Environment variables not working"

**Causa**: Variables no configuradas o mal nombradas

**Solución**:
1. Verifica que las variables empiecen con `VITE_`
2. Redeploy después de agregar variables
3. Verifica que no haya espacios en los valores

### Error: "Supabase connection failed"

**Causa**: Credenciales incorrectas o cliente no instalado

**Solución**:
1. Verifica las credenciales en Vercel
2. Asegúrate de que `@supabase/supabase-js` esté instalado
3. Verifica que `src/lib/supabase.js` esté descomentado

---

## 📊 Monitoreo y Analytics

### Vercel Analytics

1. Ve a tu proyecto en Vercel
2. Click en "Analytics"
3. Activa "Enable Analytics"
4. Verás métricas de:
   - Visitas
   - Performance
   - Core Web Vitals

### Supabase Analytics

1. Ve a tu proyecto en Supabase
2. Click en "Database" → "Tables"
3. Revisa la tabla `analytics` para ver visitas
4. Usa las vistas creadas:
   - `page_views` - Vistas por página
   - `contact_stats` - Estadísticas de contactos

---

## 🔄 Despliegues Automáticos

Vercel desplegará automáticamente cuando:
- Hagas push a la rama `main`
- Crees un Pull Request (preview deployment)
- Hagas merge de un PR

**No necesitas hacer nada**, Vercel detecta los cambios automáticamente.

---

## 📱 Preview Deployments

Cada PR crea un preview deployment:
- URL única para testing
- No afecta producción
- Se elimina al cerrar el PR

---

## 🎨 Personalización Post-Despliegue

### 1. Reemplazar Assets

- `public/avatar.svg` → Tu foto real
- `public/companies/*.svg` → Logos reales de empresas
- `public/gallery/*.svg` → Imágenes de proyectos

### 2. Actualizar Información

Edita `src/App.jsx`:
- Nombre y título
- Descripción personal
- Proyectos y casos de estudio
- Habilidades
- Links de contacto (email, LinkedIn, GitHub)

### 3. Commit y Push

```bash
git add .
git commit -m "feat: Actualizar contenido personal"
git push origin main
```

Vercel desplegará automáticamente en 1-2 minutos.

---

## 📚 Recursos Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de React](https://react.dev/)

---

## 🆘 Soporte

Si tienes problemas:

1. Revisa los logs en Vercel Dashboard
2. Consulta `GUIA_INSTALACION.md` para troubleshooting
3. Revisa la documentación oficial de Vercel
4. Verifica que el build funcione localmente

---

## ✨ Resultado Final

Una vez desplegado, tendrás:

- ✅ Portafolio profesional en línea
- ✅ URL pública de Vercel
- ✅ Despliegues automáticos desde GitHub
- ✅ HTTPS automático
- ✅ CDN global de Vercel
- ✅ Performance optimizado
- ✅ Backend opcional con Supabase

---

**¡Felicidades! Tu portafolio está listo para el mundo 🎉**

---

**Última actualización**: 2026-03-13  
**Versión**: 1.0.0  
**Estado**: ✅ LISTO PARA DESPLEGAR
