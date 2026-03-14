# 📧 Cómo Cambiar el Email de Contacto

## 📍 Ubicación del Archivo

**Archivo**: `src/App.jsx`

---

## 🔍 3 Lugares donde Cambiar el Email

### 1️⃣ Mensaje de Éxito (Línea ~99)

**Ubicación**: Dentro de la función `handleContactSubmit`

**Línea actual**:
```javascript
alert('¡Mensaje enviado con éxito! Te contactaré pronto a través de keiver30@gmail.com');
```

**Cambiar a**:
```javascript
alert('¡Mensaje enviado con éxito! Te contactaré pronto a través de TU_NUEVO_EMAIL@gmail.com');
```

---

### 2️⃣ Mensaje de Error (Línea ~108)

**Ubicación**: Dentro del `catch` de la función `handleContactSubmit`

**Línea actual**:
```javascript
alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a keiver30@gmail.com');
```

**Cambiar a**:
```javascript
alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a TU_NUEVO_EMAIL@gmail.com');
```

---

### 3️⃣ Sección de Contacto Directo (Línea ~301)

**Ubicación**: En el JSX, sección "Contacto directo"

**Línea actual**:
```javascript
<strong>Email:</strong> <a href="mailto:keiver30@gmail.com">keiver30@gmail.com</a>
```

**Cambiar a**:
```javascript
<strong>Email:</strong> <a href="mailto:TU_NUEVO_EMAIL@gmail.com">TU_NUEVO_EMAIL@gmail.com</a>
```

---

## 🎯 Ejemplo Completo

Si tu nuevo email es: **contacto@miempresa.com**

### Cambio 1 (Línea ~99):
```javascript
alert('¡Mensaje enviado con éxito! Te contactaré pronto a través de contacto@miempresa.com');
```

### Cambio 2 (Línea ~108):
```javascript
alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a contacto@miempresa.com');
```

### Cambio 3 (Línea ~301):
```javascript
<strong>Email:</strong> <a href="mailto:contacto@miempresa.com">contacto@miempresa.com</a>
```

---

## 📝 Pasos para Cambiar

### 1. Abrir el archivo
```bash
# Abre el archivo en tu editor
code src/App.jsx
```

### 2. Buscar el email actual

Presiona `Ctrl + F` (Windows) o `Cmd + F` (Mac) y busca:
```
keiver30@gmail.com
```

Deberías encontrar **3 coincidencias**.

### 3. Reemplazar todas las ocurrencias

**Opción A - Reemplazar todas a la vez**:
1. Presiona `Ctrl + H` (Windows) o `Cmd + H` (Mac)
2. En "Buscar": `keiver30@gmail.com`
3. En "Reemplazar": `TU_NUEVO_EMAIL@gmail.com`
4. Click en "Reemplazar todo" (Replace All)

**Opción B - Reemplazar una por una**:
1. Busca cada ocurrencia con `Ctrl + F`
2. Edita manualmente cada línea
3. Guarda el archivo

### 4. Guardar cambios

Presiona `Ctrl + S` (Windows) o `Cmd + S` (Mac)

### 5. Verificar localmente

```bash
npm run dev
```

Abre http://localhost:5173 y verifica que el nuevo email aparezca en:
- Sección "Contacto directo"
- Mensaje de éxito (envía un mensaje de prueba)

### 6. Subir a GitHub

```bash
git add src/App.jsx
git commit -m "feat: Actualizar email de contacto a TU_NUEVO_EMAIL@gmail.com"
git push origin main
```

### 7. Vercel desplegará automáticamente

Espera 1-2 minutos y verifica tu sitio en producción.

---

## 🔍 Búsqueda Visual en el Código

### Línea ~99 (Mensaje de éxito):
```javascript
try {
  const { data, error } = await supabase
    .from('contacts')
    .insert([...]);

  if (error) throw error;

  alert('¡Mensaje enviado con éxito! Te contactaré pronto a través de keiver30@gmail.com');
  //                                                                    ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  //                                                                    CAMBIAR AQUÍ
  event.target.reset();
}
```

### Línea ~108 (Mensaje de error):
```javascript
} catch (error) {
  console.error('Error al enviar mensaje:', error);
  
  if (error.code === '23514') {
    alert('Por favor verifica que:...');
  } else {
    alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente a keiver30@gmail.com');
    //                                                                                                    ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    //                                                                                                    CAMBIAR AQUÍ
  }
}
```

### Línea ~301 (Contacto directo):
```javascript
<div className="contact__aside">
  <div className="card card--elevated">
    <h3>Contacto directo</h3>
    <p>
      <strong>Email:</strong> <a href="mailto:keiver30@gmail.com">keiver30@gmail.com</a>
      {/*                                    ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
      {/*                                    CAMBIAR AQUÍ         CAMBIAR AQUÍ         */}
    </p>
```

---

## ⚠️ Importante

### ✅ Cambiar en 3 lugares:
1. Mensaje de éxito (línea ~99)
2. Mensaje de error (línea ~108)
3. Sección de contacto (línea ~301)

### ❌ NO cambiar:
- Los mensajes en Supabase (se guardan automáticamente)
- El archivo `.env` (eso es para la conexión a Supabase)
- Otros archivos de documentación

---

## 🎯 Resumen Rápido

**Archivo**: `src/App.jsx`  
**Buscar**: `keiver30@gmail.com`  
**Reemplazar**: Tu nuevo email  
**Lugares**: 3 ocurrencias  
**Comando**: `Ctrl + H` → Reemplazar todo  

---

## 📞 Ejemplo Práctico

Si quieres cambiar a: **info@contabilidad.com**

1. Abre `src/App.jsx`
2. Presiona `Ctrl + H`
3. Buscar: `keiver30@gmail.com`
4. Reemplazar: `info@contabilidad.com`
5. Click "Reemplazar todo"
6. Guardar (`Ctrl + S`)
7. Commit y push a GitHub

¡Listo! Tu nuevo email estará en el sitio.

---

**¿Necesitas ayuda para cambiar el email? Avísame y lo hago por ti.**
