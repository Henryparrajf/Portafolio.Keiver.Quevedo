# Portafolio Keiver Quevedo

Portafolio web moderno creado como SPA para un contador/consultor financiero, con enfoque en automatización, análisis de datos, y presentación de casos de estudio.

## 🚀 Inicio Rápido

### Instalación

```bash
# 1. Clonar el repositorio
git clone <tu-repo-url>
cd Asesoria.keiverQuevedo

# 2. Instalar dependencias
cd frontend
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build de Producción

```bash
cd frontend
npm run build
```

El build se generará en la carpeta `dist/` en la raíz del proyecto.

---

## 📁 Estructura del Proyecto

```
Asesoria.keiverQuevedo/
├── frontend/              # Aplicación React + Vite
│   ├── src/              # Código fuente
│   │   ├── components/   # Componentes React
│   │   ├── hooks/        # Custom hooks
│   │   ├── animations/   # Animaciones Lottie
│   │   ├── App.jsx       # Componente principal
│   │   ├── main.jsx      # Entry point
│   │   └── styles.css    # Estilos globales
│   ├── public/           # Assets estáticos
│   │   ├── companies/    # Logos de empresas
│   │   ├── gallery/      # Imágenes de galería
│   │   └── animations/   # Archivos Lottie
│   ├── package.json      # Dependencias
│   └── vite.config.js    # Configuración Vite
├── proyecto-contable/    # Proyecto legacy con Supabase
├── sitio-contable/       # Sitio estático legacy
├── docs/                 # Documentación
├── dist/                 # Build output (generado)
├── vercel.json           # Configuración Vercel
└── README.md             # Este archivo
```

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18.3 + Vite 5.4
- **Animaciones**: Lottie React
- **Estilos**: CSS moderno con variables CSS
- **Hosting**: Vercel
- **Backend** (futuro): Supabase

---

## 🌐 Despliegue en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Vercel detectará automáticamente la configuración
3. Click en "Deploy"

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración de Vercel

El archivo `vercel.json` ya está configurado con:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrites para SPA routing

---

## 📝 Tareas Pendientes

### Contenido
- [ ] Reemplazar `public/avatar.svg` con foto real
- [ ] Actualizar logos en `public/companies/`
- [ ] Agregar imágenes reales de proyectos en `public/gallery/`
- [ ] Actualizar información de contacto en `App.jsx`

### Funcionalidad
- [ ] Integrar formulario de contacto con backend
- [ ] Conectar con Supabase (opcional)
- [ ] Agregar Google Analytics
- [ ] Implementar SEO metatags dinámicos

### Optimización
- [ ] Comprimir imágenes
- [ ] Lazy loading de componentes
- [ ] Optimizar animaciones Lottie

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (puerto 5173)
npm run build    # Build de producción
npm run preview  # Preview del build local
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'react'"

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Error: "Build failed"

Verifica que estés en la carpeta `frontend/` antes de ejecutar comandos npm.

### El sitio no carga después del deploy

Verifica que `vercel.json` tenga la configuración de rewrites para SPA routing.

---

## 📚 Documentación Adicional

- [REORGANIZACION.md](./REORGANIZACION.md) - Plan completo de reorganización
- [SOLUCION_RAPIDA.md](./SOLUCION_RAPIDA.md) - Guía rápida de despliegue
- [docs/guia-definicion-proyecto.md](./docs/guia-definicion-proyecto.md) - Visión del proyecto

---

## 📄 Licencia

Proyecto personal de Keiver Quevedo.

---

## 📞 Contacto

- **Email**: contacto@keiverquevedo.com
- **LinkedIn**: [linkedin.com/in/keiverquevedo](https://linkedin.com/in/keiverquevedo)
- **GitHub**: [github.com/keiverquevedo](https://github.com/keiverquevedo)

---

**Última actualización**: Marzo 2026
