# Portafolio Keiver Quevedo

Portafolio web moderno creado como SPA para un contador/consultor financiero, con enfoque en automatización, análisis de datos, y presentación de casos de estudio.

## Estructura del proyecto

- `frontend/`: Código del frontend (React + Vite).
- `proyecto-contable/`: Código del proyecto contable previo.
- `sitio-contable/`: Sitio estático previo.
- `docs/`: Documentación del proyecto.

## Cómo ejecutar

```bash
cd frontend
npm install
npm run dev
```

## Despliegue
### Vercel (recomendado)
1. Crea una cuenta o inicia sesión en https://vercel.com.
2. Conecta el repositorio (GitHub/GitLab/Bitbucket).
3. En la configuración del proyecto, establece:
   - **Framework Preset**: `Vite` (o `Custom` si no aparece).
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `frontend/dist`
4. Despliega (Vercel detecta cambios en `main` automáticamente).

> El archivo `vercel.json` ya está incluido en el repo para asegurar que el despliegue sirva correctamente el contenido generado.

### Alternativa: Netlify
1. Sube el repo a Netlify.
2. En **Build settings** usa:
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

## Notas
- Reemplaza los assets de `frontend/public` (avatar, logos, galería) con contenido real.
- El formulario de contacto actualmente muestra un `alert()`; conecta con tu backend o servicio de correo.
