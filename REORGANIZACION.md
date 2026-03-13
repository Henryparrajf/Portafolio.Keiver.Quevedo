# � Plan de Reorganización del Proyecto

## 🔍 Problemas Identificados

### Críticos
1. ❌ Dependencias del frontend no instaladas
2. ❌ Estructura de proyecto desorganizada (3 proyectos mezclados)
3. ❌ Configuración de Vercel necesita ajustes
4. ❌ Backend de Supabase sin configurar (falta config.js)
5. ❌ No hay integración entre frontend React y backend Supabase

### Secundarios
- Versiones de React 19 y Vite 8 (muy nuevas, pueden causar problemas)
- Duplicación de archivos (múltiples README, package.json)
- Configuración mixta (netlify.toml + vercel.json)
- SQL básico sin migraciones estructuradas

---

## 🎯 Solución Propuesta

### Estructura Nueva (Opción Recomendada)

```
Asesoria.keiverQuevedo/
├── .github/
│   └── workflows/
├── docs/
│   └── guia-definicion-proyecto.md
├── src/                          # Frontend React (mover desde frontend/src)
│   ├── components/
│   ├── hooks/
│   ├── animations/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── public/                       # Assets públicos (mover desde frontend/public)
│   ├── animations/
│   ├── companies/
│   ├── gallery/
│   ├── avatar.svg
│   └── favicon.png
├── supabase/                     # Backend y DB (mover desde proyecto-contable)
│   ├── migrations/
│   │   ├── 01_create_tables.sql
│   │   ├── 02_rls_policies.sql
│   │   └── 03_functions.sql
│   ├── config.example.js
│   └── README.md
├── legacy/                       # Proyectos antiguos (archivar)
│   ├── proyecto-contable/
│   └── sitio-contable/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 📝 Pasos de Implementación

### Fase 1: Preparación (ACTUAL)
- [x] Analizar estructura actual
- [x] Identificar problemas
- [x] Corregir vercel.json
- [x] Corregir vite.config.js
- [ ] Instalar dependencias del frontend

### Fase 2: Reorganización de Archivos
- [ ] Mover frontend/src → src/
- [ ] Mover frontend/public → public/
- [ ] Mover frontend/package.json → package.json (raíz)
- [ ] Mover frontend/vite.config.js → vite.config.js (raíz)
- [ ] Crear carpeta supabase/ y mover SQL
- [ ] Mover proyectos antiguos a legacy/

### Fase 3: Configuración
- [ ] Actualizar package.json con scripts correctos
- [ ] Crear .env.example con variables de Supabase
- [ ] Configurar integración Supabase en el frontend
- [ ] Actualizar README.md principal
- [ ] Limpiar archivos duplicados

### Fase 4: Testing
- [ ] Instalar dependencias: `npm install`
- [ ] Probar build local: `npm run build`
- [ ] Probar dev server: `npm run dev`
- [ ] Verificar que Vercel puede desplegar

### Fase 5: Despliegue
- [ ] Commit y push de cambios
- [ ] Configurar proyecto en Vercel
- [ ] Configurar variables de entorno en Vercel
- [ ] Desplegar y verificar

---

## 🔧 Comandos Útiles

### Desarrollo Local
```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (puerto 5173)
npm run build        # Build de producción
npm run preview      # Preview del build
```

### Vercel
```bash
vercel               # Deploy preview
vercel --prod        # Deploy a producción
```

---

## ⚙️ Configuración de Vercel

### Settings en Dashboard
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: npm run build
- **Output Directory**: dist
- **Install Command**: npm install

### Variables de Entorno
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima
```

---

## 📦 Dependencias Actuales

### Frontend (React + Vite)
```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "lottie-react": "^2.4.1"
  },
  "devDependencies": {
    "vite": "^8.0.0",
    "@vitejs/plugin-react": "^6.0.1"
  }
}
```

### Backend (Supabase)
- @supabase/supabase-js (por agregar)

---

## 🚨 Notas Importantes

1. **Versiones futuras**: React 19 y Vite 8 son versiones muy nuevas. Si hay problemas, considerar downgrade a:
   - React 18.3.x
   - Vite 5.x

2. **Supabase**: Necesitas crear proyecto en supabase.com y obtener:
   - URL del proyecto
   - Anon/Public key

3. **Git**: Asegúrate de que .env esté en .gitignore

4. **Assets**: Reemplazar avatar.svg y logos placeholder con contenido real

---

## 📚 Recursos

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Última actualización**: 2026-03-13
**Estado**: En progreso - Fase 1
