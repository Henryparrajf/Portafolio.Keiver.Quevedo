# 📸 Guía para Descargar Imágenes de la Galería

## 🎯 Imágenes Necesarias

Necesitas 4 imágenes para la galería de referencia:

1. **Dashboard financiero** → `public/gallery/dashboard.svg` (o .jpg/.png)
2. **Modelo de flujo de caja** → `public/gallery/flow.svg` (o .jpg/.png)
3. **Automatización de procesos** → `public/gallery/automation.svg` (o .jpg/.png)
4. **Análisis tributario** → `public/gallery/tax.svg` (o .jpg/.png)

---

## 📥 Dónde Descargar Imágenes Gratuitas

### Opción 1: Unsplash (Recomendado)

**Sitio**: [https://unsplash.com](https://unsplash.com)
- ✅ Imágenes 100% gratuitas
- ✅ Alta calidad
- ✅ Sin atribución requerida
- ✅ Uso comercial permitido

---

## 🔍 Búsquedas Recomendadas

### 1. Dashboard Financiero

**Buscar en Unsplash**:
- `financial dashboard`
- `business analytics`
- `data visualization`
- `charts graphs`
- `power bi dashboard`

**URLs directas**:
- [https://unsplash.com/s/photos/financial-dashboard](https://unsplash.com/s/photos/financial-dashboard)
- [https://unsplash.com/s/photos/business-analytics](https://unsplash.com/s/photos/business-analytics)
- [https://unsplash.com/s/photos/data-visualization](https://unsplash.com/s/photos/data-visualization)

**Qué buscar**:
- Pantallas con gráficos de barras, líneas, tortas
- Dashboards con múltiples métricas
- Visualizaciones de datos financieros
- Colores: azul, verde, morado (profesional)

---

### 2. Modelo de Flujo de Caja

**Buscar en Unsplash**:
- `cash flow diagram`
- `business process flow`
- `workflow diagram`
- `flowchart business`
- `process mapping`

**URLs directas**:
- [https://unsplash.com/s/photos/flowchart](https://unsplash.com/s/photos/flowchart)
- [https://unsplash.com/s/photos/business-process](https://unsplash.com/s/photos/business-process)
- [https://unsplash.com/s/photos/workflow](https://unsplash.com/s/photos/workflow)

**Qué buscar**:
- Diagramas de flujo con flechas
- Procesos con pasos secuenciales
- Visualizaciones de flujo de dinero
- Gráficos de Sankey o cascada

---

### 3. Automatización de Procesos

**Buscar en Unsplash**:
- `automation technology`
- `robotic process automation`
- `workflow automation`
- `digital transformation`
- `ai automation`

**URLs directas**:
- [https://unsplash.com/s/photos/automation](https://unsplash.com/s/photos/automation)
- [https://unsplash.com/s/photos/digital-transformation](https://unsplash.com/s/photos/digital-transformation)
- [https://unsplash.com/s/photos/technology-workflow](https://unsplash.com/s/photos/technology-workflow)

**Qué buscar**:
- Robots o brazos robóticos
- Interfaces de software con flujos
- Iconos de automatización
- Engranajes o procesos conectados

---

### 4. Análisis Tributario

**Buscar en Unsplash**:
- `tax calculation`
- `accounting finance`
- `financial analysis`
- `tax forms`
- `business accounting`

**URLs directas**:
- [https://unsplash.com/s/photos/tax-accounting](https://unsplash.com/s/photos/tax-accounting)
- [https://unsplash.com/s/photos/financial-analysis](https://unsplash.com/s/photos/financial-analysis)
- [https://unsplash.com/s/photos/accounting](https://unsplash.com/s/photos/accounting)

**Qué buscar**:
- Calculadoras con documentos
- Gráficos de impuestos
- Formularios de declaración
- Análisis financiero con números

---

## 📋 Pasos para Descargar

### Desde Unsplash:

1. **Ir a Unsplash**:
   - Abre [https://unsplash.com](https://unsplash.com)

2. **Buscar la imagen**:
   - Usa las búsquedas recomendadas arriba
   - Ejemplo: "financial dashboard"

3. **Seleccionar imagen**:
   - Click en la imagen que te guste
   - Verifica que sea de alta calidad (mínimo 1920x1080px)

4. **Descargar**:
   - Click en el botón verde **"Download free"**
   - La imagen se descargará automáticamente

5. **Renombrar**:
   - Renombra el archivo según corresponda:
     - `dashboard.jpg` o `dashboard.png`
     - `flow.jpg` o `flow.png`
     - `automation.jpg` o `automation.png`
     - `tax.jpg` o `tax.png`

6. **Guardar en la carpeta correcta**:
   - Mueve el archivo a: `public/gallery/`

---

## 🎨 Especificaciones Técnicas

### Tamaño recomendado:
- **Ancho**: 800px - 1200px
- **Alto**: 450px - 675px
- **Ratio**: 16:9 (horizontal)

### Formato:
- ✅ **JPG** (recomendado para fotos)
- ✅ **PNG** (si tiene transparencia)
- ⚠️ **SVG** (solo si es ilustración vectorial)

### Peso:
- Máximo: 500KB por imagen
- Recomendado: 200-300KB

### Optimizar:
Si la imagen es muy pesada, comprime en:
- [TinyJPG](https://tinyjpg.com/)
- [Squoosh](https://squoosh.app/)

---

## 🔄 Actualizar el Código

Una vez que descargues las imágenes, necesitas actualizar las extensiones en el código si usas JPG o PNG en lugar de SVG.

### Si usas JPG:

Edita `src/components/GalleryStrip.jsx`:

```javascript
const galleryItems = [
  { title: 'Dashboard financiero', src: '/gallery/dashboard.jpg' },
  { title: 'Modelo de flujo de caja', src: '/gallery/flow.jpg' },
  { title: 'Automatización de procesos', src: '/gallery/automation.jpg' },
  { title: 'Análisis tributario', src: '/gallery/tax.jpg' },
];
```

### Si usas PNG:

```javascript
const galleryItems = [
  { title: 'Dashboard financiero', src: '/gallery/dashboard.png' },
  { title: 'Modelo de flujo de caja', src: '/gallery/flow.png' },
  { title: 'Automatización de procesos', src: '/gallery/automation.png' },
  { title: 'Análisis tributario', src: '/gallery/tax.png' },
];
```

---

## ✅ Checklist

- [ ] Descargar imagen de dashboard financiero
- [ ] Descargar imagen de flujo de caja
- [ ] Descargar imagen de automatización
- [ ] Descargar imagen de análisis tributario
- [ ] Renombrar todas las imágenes correctamente
- [ ] Optimizar el peso (menos de 500KB cada una)
- [ ] Guardar en `public/gallery/`
- [ ] Actualizar extensiones en `GalleryStrip.jsx` si es necesario
- [ ] Probar localmente con `npm run dev`
- [ ] Subir a GitHub con `git add`, `git commit`, `git push`

---

## 🎯 Alternativas si No Encuentras en Unsplash

### Pexels
- [https://www.pexels.com](https://www.pexels.com)
- Gratuito, alta calidad
- Busca los mismos términos

### Pixabay
- [https://www.pixabay.com](https://www.pixabay.com)
- Gratuito, buena variedad
- Busca los mismos términos

### Freepik (con atribución)
- [https://www.freepik.com](https://www.freepik.com)
- Gratuito con atribución
- Muchas ilustraciones vectoriales

---

## 📞 Siguiente Paso

1. **Descarga las 4 imágenes** de Unsplash usando las búsquedas recomendadas
2. **Renómbralas** correctamente
3. **Guárdalas** en `public/gallery/`
4. **Avísame** cuando estén listas para actualizar el código si es necesario

---

## 💡 Consejo

Si quieres que las imágenes tengan un estilo consistente:
- Elige imágenes del mismo fotógrafo en Unsplash
- O usa el mismo filtro de color (azul, morado, etc.)
- O busca ilustraciones en lugar de fotos reales

---

**¿Necesitas ayuda para descargar alguna imagen específica? Avísame y te guío paso a paso.**
