# ✅ Checklist de Personalización Post-Despliegue

## 🎉 ¡Vercel está desplegado!

**URL del sitio**: Verifica tu URL en el dashboard de Vercel

---

## 📋 Lo que FALTA Personalizar

### 🔴 CRÍTICO - Información Personal

#### 1. Actualizar Datos de Contacto en `src/App.jsx`

**Líneas a cambiar**:

```javascript
// Línea ~207
<a href="mailto:contacto@keiverquevedo.com">contacto@keiverquevedo.com</a>
// ⬇️ Cambiar por tu email real

// Línea ~212
<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
  linkedin.com/in/keiverquevedo
</a>
// ⬇️ Cambiar por tu LinkedIn real

// Línea ~218
<a href="https://github.com" target="_blank" rel="noreferrer">
  github.com/keiverquevedo
</a>
// ⬇️ Cambiar por tu GitHub real
```

**Comando para editar**:
```bash
# Abre el archivo y busca estas líneas
code src/App.jsx
# O usa tu editor preferido
```

---

### 🟡 IMPORTANTE - Assets Visuales

#### 2. Reemplazar Avatar/Foto

**Archivo actual**: `public/avatar.svg` (placeholder)

**Opciones**:
1. Foto profesional en formato JPG/PNG
2. Avatar personalizado
3. Ilustración profesional

**Pasos**:
```bash
# Opción 1: Reemplazar con foto
# Guarda tu foto como: public/avatar.jpg o public/avatar.png

# Opción 2: Actualizar en App.jsx (línea ~103)
<img src="/avatar.jpg" alt="Avatar de Keiver Quevedo" loading="lazy" />
```

**Recomendaciones**:
- Tamaño: 400x400px mínimo
- Formato: JPG (optimizado) o PNG
- Peso: Menos de 200KB
- Fondo: Profesional o transparente

---

#### 3. Actualizar Logos de Empresas

**Archivos actuales**: `public/companies/*.svg` (placeholders)

**Empresas a reemplazar**:
- [ ] `gurusoft.svg` → Logo real de GuruSoft
- [ ] `nubox.svg` → Logo real de Nubox
- [ ] `powerbi.svg` → Logo real de Power BI
- [ ] `siigo.svg` → Logo real de SIIGO
- [ ] `supabase.svg` → Logo real de Supabase

**Dónde conseguir logos**:
- Sitios oficiales de las empresas
- [Brandfetch](https://brandfetch.com/)
- [Clearbit Logo API](https://clearbit.com/logo)

**Formato recomendado**: SVG o PNG transparente

---

#### 4. Agregar Imágenes de Proyectos

**Archivos actuales**: `public/gallery/*.svg` (placeholders)

**Imágenes a reemplazar**:
- [ ] `automation.svg` → Screenshot de automatización
- [ ] `dashboard.svg` → Screenshot de dashboard
- [ ] `flow.svg` → Diagrama de flujo
- [ ] `tax.svg` → Visualización tributaria

**Recomendaciones**:
- Capturas de pantalla reales de tus proyectos
- Mockups de dashboards
- Diagramas de procesos
- Formato: JPG optimizado o PNG
- Tamaño: 800x450px (ratio 16:9)

---

### 🟢 OPCIONAL - Contenido

#### 5. Personalizar Proyectos

**Archivo**: `src/App.jsx` (líneas ~13-35)

**Proyectos actuales** (ejemplos):
```javascript
const projects = [
  {
    title: 'Automatización de reportes financieros',
    description: '...',
    tags: ['Supabase', 'Node.js', 'Power BI', 'SIIGO'],
  },
  // ... más proyectos
];
```

**Acción**: Reemplazar con tus proyectos reales

---

#### 6. Actualizar Habilidades

**Archivo**: `src/App.jsx` (líneas ~37-46)

**Habilidades actuales** (ejemplos):
```javascript
const skills = [
  'Contabilidad financiera',
  'NIIF / NIC',
  'Análisis de datos',
  // ... más habilidades
];
```

**Acción**: Agregar/quitar según tu experiencia

---

#### 7. Modificar Descripción Personal

**Archivo**: `src/App.jsx` (líneas ~70-75)

**Texto actual**:
```javascript
<p className="subtitle">
  Transformo datos en decisiones estratégicas: automatización con IA, 
  dashboards financieros y cumplimiento tributario en la nube.
</p>
```

**Acción**: Personalizar con tu propuesta de valor

---

### 🔵 AVANZADO - Funcionalidad

#### 8. Integrar Formulario de Contacto con Supabase

**Estado actual**: Muestra un `alert()` al enviar

**Pasos para integrar**:

1. **Crear proyecto en Supabase**:
   - Ve a [supabase.com](https://supabase.com)
   - Crea nuevo proyecto
   - Ejecuta migraciones SQL de `supabase/migrations/`

2. **Obtener credenciales**:
   - Settings → API
   - Copia URL y Anon Key

3. **Configurar variables en Vercel**:
   - Vercel Dashboard → Settings → Environment Variables
   - Agrega:
     ```
     VITE_SUPABASE_URL=tu-url
     VITE_SUPABASE_ANON_KEY=tu-key
     ```

4. **Instalar cliente**:
   ```bash
   npm install @supabase/supabase-js
   ```

5. **Activar en código**:
   - Edita `src/lib/supabase.js`
   - Descomenta el código real
   - Comenta el mock

6. **Actualizar formulario**:
   - Edita `src/App.jsx` (línea ~180)
   - Reemplaza el `alert()` con llamada a Supabase

**Ejemplo de código**:
```javascript
import { supabase } from './lib/supabase';

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const { data, error } = await supabase
    .from('contacts')
    .insert([{
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }]);
  
  if (error) {
    alert('Error al enviar mensaje');
  } else {
    alert('¡Mensaje enviado con éxito!');
    event.target.reset();
  }
};
```

---

#### 9. Agregar Google Analytics (Opcional)

**Pasos**:

1. Crea cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu Tracking ID (G-XXXXXXXXXX)
3. Agrega variable en Vercel:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
4. Instala librería:
   ```bash
   npm install react-ga4
   ```
5. Configura en `src/main.jsx`

---

#### 10. Optimizar Imágenes

**Herramientas recomendadas**:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimizar SVG
- [Squoosh](https://squoosh.app/) - Comprimir y convertir

**Objetivo**: Reducir peso de imágenes sin perder calidad

---

## 📊 Resumen de Prioridades

### 🔴 URGENTE (Hacer AHORA)
1. ✅ Actualizar email, LinkedIn, GitHub en `src/App.jsx`
2. ✅ Reemplazar foto/avatar en `public/avatar.svg`

### 🟡 IMPORTANTE (Esta semana)
3. ✅ Actualizar logos de empresas
4. ✅ Agregar imágenes reales de proyectos
5. ✅ Personalizar descripción de proyectos

### 🟢 OPCIONAL (Cuando puedas)
6. ✅ Integrar Supabase para formulario
7. ✅ Agregar Google Analytics
8. ✅ Optimizar imágenes
9. ✅ Configurar dominio personalizado

---

## 🚀 Flujo de Trabajo para Cambios

### 1. Hacer Cambios Localmente
```bash
# Editar archivos
code src/App.jsx

# Probar localmente
npm run dev
```

### 2. Verificar que Funciona
```bash
# Abrir http://localhost:5173
# Verificar cambios
```

### 3. Commit y Push
```bash
git add .
git commit -m "feat: Actualizar información personal"
git push origin main
```

### 4. Vercel Despliega Automáticamente
- Vercel detecta el push
- Hace build automático
- Despliega en 1-2 minutos
- ¡Listo!

---

## ✅ Checklist de Verificación

### Información Personal
- [ ] Email actualizado
- [ ] LinkedIn actualizado
- [ ] GitHub actualizado
- [ ] Foto/avatar reemplazado
- [ ] Descripción personalizada

### Contenido
- [ ] Proyectos personalizados
- [ ] Habilidades actualizadas
- [ ] Logos de empresas reales
- [ ] Imágenes de proyectos reales

### Funcionalidad
- [ ] Formulario de contacto funcional
- [ ] Google Analytics configurado (opcional)
- [ ] Imágenes optimizadas
- [ ] Dominio personalizado (opcional)

---

## 📞 Siguiente Paso Inmediato

### 🎯 ACCIÓN REQUERIDA:

1. **Abre** `src/App.jsx`
2. **Busca** las líneas 207, 212, 218
3. **Cambia** los links de contacto por los tuyos reales
4. **Guarda** el archivo
5. **Commit y push**:
   ```bash
   git add src/App.jsx
   git commit -m "feat: Actualizar información de contacto"
   git push origin main
   ```
6. **Espera** 2 minutos
7. **Verifica** en tu URL de Vercel

---

## 🎉 Después de Personalizar

Una vez que hayas actualizado todo:

✅ Tendrás un portafolio 100% personalizado  
✅ Con tu información real  
✅ Con tus proyectos reales  
✅ Listo para compartir con clientes  
✅ Profesional y funcional  

---

**¿Necesitas ayuda con algún paso específico? ¡Pregúntame!**

---

**Última actualización**: 2026-03-13  
**Estado**: ✅ Vercel desplegado - Pendiente personalización
