# 🚀 Guía Completa de Instalación y Despliegue

## 📋 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior
- **Git**: Para clonar el repositorio
- **Cuenta en Vercel**: Para despliegue (gratis)
- **Cuenta en Supabase**: Para backend (opcional, gratis)

---

## 🔧 Instalación Local

### Opción 1: Script Automático (Windows)

```bash
# Ejecutar el script de instalación
instalar.bat
```

### Opción 2: Manual

```bash
# 1. Clonar el repositorio
git clone <tu-repo-url>
cd Asesoria.keiverQuevedo

# 2. Instalar dependencias
npm install

# 3. Crear archivo de variables de entorno
cp .env.example .env

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## 🌐 Despliegue en Vercel

### Método 1: Deploy Automático desde GitHub

1. **Conectar Repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub

2. **Configuración Automática**
   - Vercel detectará automáticamente que es un proyecto Vite
   - No necesitas cambiar nada, la configuración ya está en `vercel.json`

3. **Variables de Entorno** (si usas Supabase)
   - Settings → Environment Variables
   - Agrega:
     ```
     VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
     VITE_SUPABASE_ANON_KEY=tu-clave-publica
     ```

4. **Deploy**
   - Click en "Deploy"
   - Espera 1-2 minutos
   - ¡Listo! Tu sitio está en línea

### Método 2: Deploy Manual con CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy preview
vercel

# 4. Deploy a producción
vercel --prod
```

---

## 🗄️ Configuración de Supabase (Opcional)

### 1. Crear Proyecto

1. Ve a [supabase.com](https://supabase.com)
2. Click en "New Project"
3. Completa:
   - Name: `portafolio-keiver-quevedo`
   - Database Password: (guárdalo)
   - Region: Más cercana a ti

### 2. Ejecutar Migraciones SQL

1. En Supabase, ve a **SQL Editor**
2. Crea una nueva query
3. Copia y pega el contenido de `supabase/migrations/001_create_tables.sql`
4. Click en "Run"
5. Repite con `002_enable_rls.sql`

### 3. Obtener Credenciales

1. Settings → API
2. Copia:
   - **Project URL**
   - **anon/public key**

### 4. Configurar en el Proyecto

```bash
# Crear archivo .env
echo "VITE_SUPABASE_URL=https://tu-proyecto.supabase.co" > .env
echo "VITE_SUPABASE_ANON_KEY=tu-clave" >> .env
```

### 5. Activar Cliente de Supabase

1. Instalar dependencia:
   ```bash
   npm install @supabase/supabase-js
   ```

2. Editar `src/lib/supabase.js`:
   - Descomentar el código de configuración
   - Comentar el mock

3. Reiniciar servidor:
   ```bash
   npm run dev
   ```

---

## ✅ Verificación de Instalación

### Checklist Local

- [ ] `npm install` completado sin errores
- [ ] `npm run dev` inicia el servidor
- [ ] Sitio carga en `http://localhost:5173`
- [ ] No hay errores en la consola del navegador
- [ ] Todas las imágenes cargan correctamente
- [ ] Navegación funciona (scroll suave, links)
- [ ] Tema oscuro/claro funciona

### Checklist Build

- [ ] `npm run build` completa sin errores
- [ ] Carpeta `dist/` se crea correctamente
- [ ] `dist/index.html` existe
- [ ] Carpeta `dist/assets/` contiene archivos JS y CSS
- [ ] `npm run preview` muestra el sitio correctamente

### Checklist Vercel

- [ ] Deploy completado exitosamente
- [ ] Sitio accesible en la URL de Vercel
- [ ] No hay errores 404
- [ ] Refresh de página funciona (SPA routing)
- [ ] Assets cargan correctamente
- [ ] Variables de entorno configuradas (si aplica)

---

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module 'react'"

```bash
# Limpiar e instalar de nuevo
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 5173 is already in use"

```bash
# Opción 1: Matar el proceso
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Opción 2: Usar otro puerto
npm run dev -- --port 3000
```

### Error: "Build failed - Cannot resolve module"

```bash
# Verificar que todas las dependencias estén instaladas
npm install
npm run build
```

### Error: Vercel "Build Command Failed"

1. Verifica que `package.json` tenga el script `build`
2. Revisa los logs de Vercel para ver el error específico
3. Asegúrate de que `vercel.json` esté en la raíz

### Error: "404 on page refresh" en Vercel

- Ya está solucionado en `vercel.json` con rewrites
- Si persiste, verifica que el archivo esté en la raíz del repo

### Error: Supabase "Invalid API key"

1. Verifica que las variables de entorno estén correctas
2. Asegúrate de usar la clave `anon`, no `service_role`
3. Reinicia el servidor después de cambiar `.env`

---

## 📊 Estructura del Proyecto

```
Asesoria.keiverQuevedo/
├── src/                    # Código fuente React
│   ├── components/         # Componentes reutilizables
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilidades y configuración
│   ├── styles/            # Estilos CSS
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Entry point
├── public/                # Assets estáticos
│   ├── companies/         # Logos de empresas
│   ├── gallery/           # Imágenes de proyectos
│   └── animations/        # Archivos Lottie
├── supabase/              # Configuración de backend
│   ├── migrations/        # Scripts SQL
│   └── README.md          # Guía de Supabase
├── legacy/                # Proyectos antiguos
├── dist/                  # Build output (generado)
├── .env.example           # Template de variables
├── package.json           # Dependencias
├── vite.config.js         # Configuración Vite
├── vercel.json            # Configuración Vercel
└── README.md              # Documentación principal
```

---

## 🎯 Próximos Pasos

### Después de la Instalación

1. **Personalizar Contenido**
   - Reemplazar `public/avatar.svg` con tu foto
   - Actualizar logos en `public/companies/`
   - Agregar imágenes reales en `public/gallery/`

2. **Actualizar Información**
   - Editar `src/App.jsx` con tus datos
   - Cambiar links de contacto
   - Modificar proyectos y habilidades

3. **Configurar Backend** (opcional)
   - Seguir guía en `supabase/README.md`
   - Integrar formulario de contacto
   - Agregar analytics

4. **Optimizar**
   - Comprimir imágenes
   - Configurar Google Analytics
   - Agregar meta tags para SEO

---

## 📚 Recursos Adicionales

- [README.md](./README.md) - Documentación principal
- [REORGANIZACION.md](./REORGANIZACION.md) - Plan de reorganización
- [RESUMEN_PROBLEMAS.md](./RESUMEN_PROBLEMAS.md) - Problemas identificados
- [SOLUCION_RAPIDA.md](./SOLUCION_RAPIDA.md) - Guía rápida
- [supabase/README.md](./supabase/README.md) - Configuración de backend

---

## 🆘 Soporte

Si encuentras problemas:

1. Revisa la sección de troubleshooting arriba
2. Consulta los archivos de documentación
3. Verifica los logs de error en la consola
4. Revisa la configuración de Vercel/Supabase

---

**Última actualización**: 2026-03-13
**Versión**: 1.0.0
