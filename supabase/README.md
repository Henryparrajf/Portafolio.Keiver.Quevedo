# 🗄️ Configuración de Supabase

Esta carpeta contiene la configuración y scripts SQL para el backend de Supabase.

## 📋 Configuración Inicial

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Click en "New Project"
4. Completa los datos:
   - **Name**: portafolio-keiver-quevedo
   - **Database Password**: (guarda esto de forma segura)
   - **Region**: Elige la más cercana a tus usuarios
   - **Pricing Plan**: Free (para empezar)

### 2. Obtener Credenciales

Una vez creado el proyecto:

1. Ve a **Settings** → **API**
2. Copia estos valores:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NI...`

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Copiar desde .env.example
cp .env.example .env
```

Edita `.env` y agrega tus credenciales:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-publica
```

### 4. Configurar en Vercel

Si despliegas en Vercel:

1. Ve a tu proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Agrega:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

## 🗃️ Estructura de Base de Datos

### Tablas Propuestas

#### `contacts` - Mensajes de contacto
```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);
```

#### `projects` - Proyectos del portafolio (opcional)
```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tags TEXT[],
  image_url TEXT,
  link_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `analytics` - Tracking de visitas (opcional)
```sql
CREATE TABLE analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🔒 Row Level Security (RLS)

### Habilitar RLS

```sql
-- Habilitar RLS en todas las tablas
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
```

### Políticas de Seguridad

#### Contacts - Solo inserción pública
```sql
-- Permitir que cualquiera inserte mensajes
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Solo admin puede leer
CREATE POLICY "Only admin can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');
```

#### Projects - Lectura pública
```sql
-- Permitir lectura pública de proyectos
CREATE POLICY "Anyone can read projects"
  ON projects
  FOR SELECT
  TO anon
  USING (true);

-- Solo admin puede modificar
CREATE POLICY "Only admin can modify projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin');
```

---

## 🚀 Integración en el Frontend

### Instalar Cliente de Supabase

```bash
npm install @supabase/supabase-js
```

### Configurar Cliente

El archivo `src/lib/supabase.js` ya está preparado. Solo descomenta el código:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Ejemplo: Enviar Mensaje de Contacto

```javascript
import { supabase } from './lib/supabase';

async function sendContactMessage(name, email, message) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([
      { name, email, message }
    ]);

  if (error) {
    console.error('Error:', error);
    return { success: false, error };
  }

  return { success: true, data };
}
```

### Ejemplo: Obtener Proyectos

```javascript
import { supabase } from './lib/supabase';

async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return [];
  }

  return data;
}
```

---

## 📁 Archivos SQL

Crea estos archivos en la carpeta `supabase/migrations/`:

### `001_create_tables.sql`
```sql
-- Crear tablas principales
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tags TEXT[],
  image_url TEXT,
  link_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `002_enable_rls.sql`
```sql
-- Habilitar Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Políticas para contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts FOR INSERT TO anon WITH CHECK (true);

-- Políticas para projects
CREATE POLICY "Anyone can read projects"
  ON projects FOR SELECT TO anon USING (true);
```

---

## 🔧 Comandos Útiles

### Ejecutar Migraciones

En el SQL Editor de Supabase, copia y pega el contenido de cada archivo SQL en orden.

### Verificar Tablas

```sql
SELECT * FROM information_schema.tables 
WHERE table_schema = 'public';
```

### Ver Políticas RLS

```sql
SELECT * FROM pg_policies;
```

---

## 📚 Recursos

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [SQL Reference](https://supabase.com/docs/guides/database/overview)

---

## 🆘 Troubleshooting

### Error: "Invalid API key"
- Verifica que las variables de entorno estén correctamente configuradas
- Asegúrate de usar la clave `anon/public`, no la `service_role`

### Error: "Row Level Security policy violation"
- Verifica que las políticas RLS estén correctamente configuradas
- Usa el SQL Editor para revisar las políticas

### Error: "Failed to fetch"
- Verifica que la URL de Supabase sea correcta
- Revisa la configuración de CORS en Supabase

---

**Última actualización**: 2026-03-13
