# 🚀 Solución Rápida para Desplegar en Vercel

## ✅ Cambios Realizados

### 1. Corregido `vercel.json`
- Configuración optimizada para Vite
- Build command apunta correctamente al frontend
- Output directory configurado en `dist`

### 2. Corregido `frontend/vite.config.js`
- Build genera en `../dist` (raíz del proyecto)
- Configuración compatible con Vercel

### 3. Ajustado `frontend/package.json`
- Versiones cambiadas a estables:
  - React: 18.3.1 (en lugar de 19.2.4)
  - Vite: 5.4.2 (en lugar de 8.0.0)
  - @vitejs/plugin-react: 4.3.1 (en lugar de 6.0.1)

---

## 📋 Pasos para Instalar y Desplegar

### Opción 1: Instalación Manual (Recomendado)

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# 1. Ir a la carpeta frontend
cd frontend

# 2. Limpiar instalaciones previas (si existen)
rm -rf node_modules package-lock.json

# 3. Instalar dependencias
npm install

# 4. Probar build local
npm run build

# 5. Probar en desarrollo
npm run dev
```

### Opción 2: Desplegar Directamente en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración
4. Click en "Deploy"

Vercel ejecutará automáticamente:
```bash
cd frontend && npm install && npm run build
```

---

## ⚙️ Configuración de Vercel (Dashboard)

Si necesitas configurar manualmente:

- **Framework Preset**: Vite
- **Root Directory**: `./` (raíz del proyecto)
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` (en frontend)
- **Node Version**: 18.x o superior

---

## 🔧 Problemas Comunes y Soluciones

### Problema: "Dependencies not installed"
**Solución**: Asegúrate de que el build command incluya `npm install`:
```bash
cd frontend && npm install && npm run build
```

### Problema: "Cannot find module 'react'"
**Solución**: Limpia node_modules y reinstala:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Problema: "Build failed - output directory not found"
**Solución**: Verifica que `vite.config.js` tenga:
```javascript
build: {
  outDir: '../dist',
  emptyOutDir: true
}
```

### Problema: "404 on page refresh"
**Solución**: Ya está configurado en `vercel.json`:
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

---

## 📦 Estructura de Archivos Clave

```
Asesoria.keiverQuevedo/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json          ← Dependencias
│   ├── vite.config.js         ← Configuración de build
│   └── index.html
├── dist/                      ← Generado por build (no subir a Git)
├── vercel.json                ← Configuración de Vercel
├── package.json               ← Script de build raíz
└── README.md
```

---

## 🎯 Próximos Pasos (Opcional)

### Para Integrar Supabase:

1. Crea un proyecto en [supabase.com](https://supabase.com)

2. Obtén tus credenciales:
   - Project URL
   - Anon/Public Key

3. Crea `.env` en la carpeta `frontend/`:
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-publica
```

4. Instala Supabase client:
```bash
cd frontend
npm install @supabase/supabase-js
```

5. Configura en Vercel:
   - Settings → Environment Variables
   - Agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

---

## ✨ Verificación Final

Antes de desplegar, verifica:

- [ ] `npm install` funciona sin errores en `frontend/`
- [ ] `npm run build` genera carpeta `dist/` en la raíz
- [ ] `npm run dev` abre el sitio en http://localhost:5173
- [ ] Archivos en `dist/` incluyen `index.html` y carpeta `assets/`
- [ ] `.gitignore` incluye `node_modules` y `dist`

---

## 🆘 Si Nada Funciona

Ejecuta este comando para diagnóstico:

```bash
cd frontend
npm install --verbose > install-log.txt 2>&1
```

Revisa `install-log.txt` para ver errores específicos.

---

**Última actualización**: 2026-03-13
**Estado**: Listo para instalar y desplegar
