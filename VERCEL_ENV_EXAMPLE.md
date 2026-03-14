# Configuración de Variables de Entorno para Vercel

## 🔧 **Variables REQUERIDAS**

### **Supabase**
```
VITE_SUPABASE_URL = https://birkbiqwnojklwmgcehy.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcmtiaXF3bm9qa2x3bWdjZWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY2MDksImV4cCI6MjA4ODkxMjYwOX0.kvjuSmPdeVMkGwkS0B3KA52d2hVCjNFInSrwi_dXU-I
```

## 📝 **Variables OPCIONALES (Recomendadas)**

### **Aplicación**
```
VITE_APP_NAME = Portafolio Keiver Quevedo
VITE_APP_URL = https://keiverquevedo.com
VITE_APP_VERSION = 1.0.0
```

### **Contacto**
```
VITE_CONTACT_EMAIL = keiver30@gmail.com
VITE_CONTACT_PHONE = +584126722754
VITE_CONTACT_WHATSAPP = +584126722754
```

### **Redes Sociales**
```
VITE_LINKEDIN_URL = https://linkedin.com/in/keiverquevedo
VITE_FACEBOOK_URL = https://facebook.com/keiver30
VITE_TWITTER_URL = https://twitter.com/keiverquevedo
```

### **Analytics (Opcional)**
```
VITE_GA_TRACKING_ID = G-XXXXXXXXXX
VITE_FB_PIXEL_ID = XXXXXXXXXXXXXXX
```

## 🚀 **Cómo Configurar en Vercel**

### **Paso 1: Ir al Dashboard de Vercel**
1. Abrir https://vercel.com/dashboard
2. Seleccionar proyecto: `Asesoria.keiverQuevedo`

### **Paso 2: Agregar Variables**
1. Ir a **Settings > Environment Variables**
2. Hacer clic en **Add New**
3. Agregar cada variable (Nombre y Valor)
4. **IMPORTANTE**: Marcar como **Production**

### **Paso 3: Redeploy**
1. Ir a **Deployments**
2. Seleccionar el último deployment
3. Hacer clic en **Redeploy**
4. Esperar a que termine el proceso

## 🔍 **Verificar Configuración**

### **1. En Consola del Navegador**
```javascript
// Abrir DevTools (F12) > Console
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Configurada' : '❌ No configurada');
```

### **2. Probar Formulario**
1. Ir a https://keiverquevedo.com
2. Bajar a la sección **Contáctame**
3. Llenar el formulario
4. Verificar que:
   - ✅ No aparece error en consola
   - ✅ Mensaje de éxito se muestra
   - ✅ Datos se guardan en Supabase

## 🛠️ **Solución de Problemas**

### **Error: "supabaseUrl is required"**
**Causa**: Variables no configuradas en Vercel
**Solución**: 
1. Verificar que las variables están en Vercel
2. Verificar que están marcadas como **Production**
3. Hacer redeploy

### **Error: "Invalid API key"**
**Causa**: Key expirada o incorrecta
**Solución**:
1. Ir a Supabase Dashboard > Settings > API
2. Generar nueva anon key
3. Actualizar en Vercel
4. Redeploy

### **Error: "Network error"**
**Causa**: URL incorrecta o problemas de red
**Solución**:
1. Verificar que la URL termina en `.supabase.co`
2. Probar conexión desde otro navegador/red
3. Verificar firewall/antivirus

## 📊 **Monitoreo**

### **Supabase Dashboard**
- **URL**: https://supabase.com/dashboard/project/birkbiqwnojklwmgcehy
- **Verificar**: Database > Tables > contacts
- **Monitorear**: Authentication > Logs

### **Vercel Logs**
- **URL**: https://vercel.com/dashboard/project/Asesoria.keiverQuevedo/deployments
- **Verificar**: Logs del último deployment
- **Buscar**: Errores relacionados con Supabase

## ✅ **Checklist de Verificación**

- [ ] `VITE_SUPABASE_URL` configurada en Vercel
- [ ] `VITE_SUPABASE_ANON_KEY` configurada en Vercel
- [ ] Variables marcadas como **Production**
- [ ] Redeploy realizado después de cambios
- [ ] No hay errores en consola del navegador
- [ ] Formulario de contacto funciona
- [ ] Datos se guardan en Supabase
- [ ] Email de confirmación se muestra

## 📞 **Soporte**

### **Si el problema persiste:**
1. **Contactar**: keiver30@gmail.com
2. **WhatsApp**: +58 4126722754
3. **Desarrollador**: Henry Parra

### **Recursos:**
- **Documentación Vercel**: https://vercel.com/docs/projects/environment-variables
- **Documentación Supabase**: https://supabase.com/docs/guides/getting-started
- **GitHub del Proyecto**: https://github.com/Henryparrajf/Asesoria.keiverQuevedo

---

**Nota**: El sitio web funcionará sin Supabase, pero el formulario de contacto no guardará los mensajes. Los visitantes aún podrán contactar por email o WhatsApp.