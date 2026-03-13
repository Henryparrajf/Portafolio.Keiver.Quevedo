# 📸 Guía de Imágenes del Portafolio

## 📁 Estructura de Carpetas

```
public/
├── avatar.svg              ← Foto de Keiver Quevedo (Hero principal)
├── desarollador.png        ← Foto del desarrollador (Footer)
├── favicon.png             ← Icono del navegador
├── companies/              ← Logos de empresas
│   ├── gurusoft.svg
│   ├── nubox.svg
│   ├── powerbi.svg
│   ├── siigo.svg
│   └── supabase.svg
└── gallery/                ← Imágenes de proyectos
    ├── automation.svg
    ├── dashboard.svg
    ├── flow.svg
    └── tax.svg
```

---

## 🎯 Imágenes Principales

### 1. Avatar Principal (Keiver Quevedo)
- **Ubicación**: `public/avatar.svg`
- **Dónde aparece**: Sección Hero (arriba, foto grande)
- **Descripción**: Foto de perfil de Keiver Quevedo
- **Formato recomendado**: SVG, PNG o JPG
- **Tamaño**: 400x400px (cuadrada)
- **Peso máximo**: 200KB

**Cómo cambiarla**:
1. Guarda tu foto como `avatar.svg` (o `avatar.png` / `avatar.jpg`)
2. Ponla en la carpeta `public/`
3. Si usas PNG o JPG, actualiza en `src/App.jsx` línea 126:
   ```jsx
   <img src="/avatar.png" alt="Avatar de Keiver Quevedo" loading="lazy" />
   ```

---

### 2. Foto del Desarrollador (Footer)
- **Ubicación**: `public/desarollador.png`
- **Dónde aparece**: Footer (abajo, foto pequeña)
- **Descripción**: Foto del desarrollador que hizo el sitio
- **Formato recomendado**: PNG o JPG
- **Tamaño**: 200x200px (cuadrada)
- **Peso máximo**: 100KB

**Cómo cambiarla**:
1. Guarda la foto del desarrollador como `desarollador.png`
2. Ponla en la carpeta `public/`
3. Ya está configurada en el código (línea 249)

---

### 3. Favicon (Icono del navegador)
- **Ubicación**: `public/favicon.png`
- **Dónde aparece**: Pestaña del navegador
- **Descripción**: Icono pequeño que aparece en la pestaña
- **Formato**: PNG o ICO
- **Tamaño**: 32x32px o 64x64px
- **Peso máximo**: 10KB

**Cómo cambiarla**:
1. Crea un icono de 32x32px
2. Guárdalo como `favicon.png`
3. Ponlo en la carpeta `public/`

---

## 🏢 Logos de Empresas

### Carpeta: `public/companies/`

Estos logos aparecen en la sección "Empresas y clientes" con animación de carrusel.

#### 1. GuruSoft
- **Archivo**: `public/companies/gurusoft.svg`
- **Descripción**: Logo de GuruSoft
- **Formato**: SVG (preferido) o PNG transparente
- **Tamaño**: Máximo 200x100px
- **Peso**: Menos de 50KB

#### 2. Nubox
- **Archivo**: `public/companies/nubox.svg`
- **Descripción**: Logo de Nubox
- **Formato**: SVG (preferido) o PNG transparente
- **Tamaño**: Máximo 200x100px
- **Peso**: Menos de 50KB

#### 3. Power BI
- **Archivo**: `public/companies/powerbi.svg`
- **Descripción**: Logo de Power BI
- **Formato**: SVG (preferido) o PNG transparente
- **Tamaño**: Máximo 200x100px
- **Peso**: Menos de 50KB

#### 4. SIIGO
- **Archivo**: `public/companies/siigo.svg`
- **Descripción**: Logo de SIIGO
- **Formato**: SVG (preferido) o PNG transparente
- **Tamaño**: Máximo 200x100px
- **Peso**: Menos de 50KB

#### 5. Supabase
- **Archivo**: `public/companies/supabase.svg`
- **Descripción**: Logo de Supabase
- **Formato**: SVG (preferido) o PNG transparente
- **Tamaño**: Máximo 200x100px
- **Peso**: Menos de 50KB

**Dónde conseguir logos**:
- Sitios oficiales de las empresas
- [Brandfetch](https://brandfetch.com/)
- [Clearbit Logo API](https://clearbit.com/logo)
- [Simple Icons](https://simpleicons.org/)

---

## 📊 Imágenes de Proyectos (Galería)

### Carpeta: `public/gallery/`

Estas imágenes aparecen en la sección "Galería de referencia" con animación de carrusel.

#### 1. Automatización
- **Archivo**: `public/gallery/automation.svg`
- **Descripción**: Imagen representativa de automatización
- **Formato**: SVG, PNG o JPG
- **Tamaño**: 800x450px (ratio 16:9)
- **Peso**: Menos de 300KB
- **Sugerencia**: Screenshot de un dashboard de automatización o diagrama de flujo

#### 2. Dashboard
- **Archivo**: `public/gallery/dashboard.svg`
- **Descripción**: Imagen de un dashboard financiero
- **Formato**: SVG, PNG o JPG
- **Tamaño**: 800x450px (ratio 16:9)
- **Peso**: Menos de 300KB
- **Sugerencia**: Screenshot de Power BI o Excel con gráficos

#### 3. Flujo de trabajo
- **Archivo**: `public/gallery/flow.svg`
- **Descripción**: Diagrama de flujo de procesos
- **Formato**: SVG, PNG o JPG
- **Tamaño**: 800x450px (ratio 16:9)
- **Peso**: Menos de 300KB
- **Sugerencia**: Diagrama de procesos contables o flujo de trabajo

#### 4. Tributario
- **Archivo**: `public/gallery/tax.svg`
- **Descripción**: Visualización de datos tributarios
- **Formato**: SVG, PNG o JPG
- **Tamaño**: 800x450px (ratio 16:9)
- **Peso**: Menos de 300KB
- **Sugerencia**: Gráficos de impuestos, deducciones o simulaciones fiscales

---

## 📝 Resumen de Nombres de Archivos

### Imágenes Principales
```
public/avatar.svg           → Foto de Keiver Quevedo (Hero)
public/desarollador.png     → Foto del desarrollador (Footer)
public/favicon.png          → Icono del navegador
```

### Logos de Empresas
```
public/companies/gurusoft.svg
public/companies/nubox.svg
public/companies/powerbi.svg
public/companies/siigo.svg
public/companies/supabase.svg
```

### Galería de Proyectos
```
public/gallery/automation.svg
public/gallery/dashboard.svg
public/gallery/flow.svg
public/gallery/tax.svg
```

---

## 🔧 Cómo Agregar/Cambiar Imágenes

### Paso 1: Preparar la imagen
1. Optimiza el tamaño y peso de la imagen
2. Renómbrala según la tabla de arriba
3. Asegúrate de que el formato sea correcto (SVG, PNG o JPG)

### Paso 2: Guardar en la carpeta correcta
1. Abre la carpeta `public/` del proyecto
2. Si es un logo de empresa, ponlo en `public/companies/`
3. Si es una imagen de galería, ponlo en `public/gallery/`
4. Si es una imagen principal, ponlo directamente en `public/`

### Paso 3: Verificar localmente
```bash
npm run dev
```
Abre http://localhost:5173 y verifica que la imagen aparezca correctamente.

### Paso 4: Subir a GitHub
```bash
git add public/
git commit -m "feat: Actualizar imágenes del portafolio"
git push origin main
```

### Paso 5: Vercel despliega automáticamente
Espera 1-2 minutos y verifica tu URL de Vercel.

---

## 🎨 Herramientas para Optimizar Imágenes

### Comprimir imágenes
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Comprimir y convertir
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimizar SVG

### Redimensionar imágenes
- [Photopea](https://www.photopea.com/) - Editor online gratuito
- [Canva](https://www.canva.com/) - Diseño y redimensionado
- [GIMP](https://www.gimp.org/) - Editor de imágenes gratuito

### Convertir formatos
- [CloudConvert](https://cloudconvert.com/) - Convertir entre formatos
- [Convertio](https://convertio.co/) - Convertidor online

---

## ✅ Checklist de Imágenes

### Imágenes Principales
- [ ] `avatar.svg` - Foto de Keiver Quevedo
- [ ] `desarollador.png` - Foto del desarrollador
- [ ] `favicon.png` - Icono del navegador

### Logos de Empresas
- [ ] `companies/gurusoft.svg`
- [ ] `companies/nubox.svg`
- [ ] `companies/powerbi.svg`
- [ ] `companies/siigo.svg`
- [ ] `companies/supabase.svg`

### Galería de Proyectos
- [ ] `gallery/automation.svg`
- [ ] `gallery/dashboard.svg`
- [ ] `gallery/flow.svg`
- [ ] `gallery/tax.svg`

---

## 📞 Siguiente Paso

1. **Guarda la imagen `desarollador.png`** en la carpeta `public/`
2. **Verifica localmente** con `npm run dev`
3. **Sube a GitHub** cuando esté lista
4. **Vercel desplegará automáticamente**

---

**¿Necesitas ayuda con alguna imagen específica? Avísame y te guío paso a paso.**
