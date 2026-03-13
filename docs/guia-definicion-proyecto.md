# Guía de Definición del Proyecto

> Documento base para agentes y desarrolladores. Contiene la visión, objetivos, requisitos técnicos y reglas de trabajo del proyecto.

---

## 1. Visión General del Proyecto

**¿De qué se trata el proyecto?**

Un portafolio moderno para un contador (2026) que sea digital, interactivo y centrado en automatización, análisis de datos y servicios en la nube. El sitio debe resolver la necesidad de demostrar capacidades técnicas y estratégicas, con un enfoque claro en cómo la contabilidad se transforma con IA, visualización y cumplimiento tributario.

**Propuesta de valor única:**
- Muestra casos de éxito reales donde se usó IA para agilizar procesos contables, optimizar impuestos y automatizar reportes.
- Demuestra dominio de herramientas de visualización (Power BI/Excel) mediante dashboards y análisis claros.
- Presenta experiencia en facturación electrónica, cumplimiento tributario y plataformas en la nube (Nubox, GuruSoft, etc.).

**Elementos clave del portafolio (2026):**
- **Enfoque tecnológico y nube:** contenido que resalte automatización con IA, herramientas en la nube y plataformas de gestión.
- **Visualización y análisis de datos:** dashboards financieros, flujos de caja y análisis que apoyen decisiones.
- **Casos de éxito (storytelling):** proyectos narrados con problemas, soluciones y resultados, apoyados en imágenes/gráficos.
- **Certificaciones y capacitación continua:** NIIF, NIC, instrumentos financieros, etc.
- **Marca personal y prueba social:** testimonios, logros cuantificables y presencia en medios.
- **Formato digital accesible:** SPA responsiva, con modo oscuro, alto contraste y buena UX.
- **Especialización:** énfasis en nichos (tecnología, salud, comercio internacional) mostrando valor estratégico.

---

## 2. Requisitos Funcionales Principales

1. **SPA responsive** con navegación fluida (hero, sobre mí, proyectos, habilidades, contacto).
2. **Casos de estudio** (3–5 proyectos) con enfoque en proceso, herramientas, resultados y métricas.
3. **Presentación personal** clara: quién eres, qué haces y cómo aportas valor.
4. **Listado de habilidades** (tecnológicas y contables) destacando herramientas clave.
5. **Formulario de contacto** + enlaces a LinkedIn/GitHub/otros.
6. **Modo oscuro / alto contraste** para accesibilidad.
7. **Optimización de rendimiento:** imágenes comprimidas, CSS/JS minimalista, carga rápida.
8. **SEO básico + accesibilidad:** etiquetas semánticas, navegación por teclado, contraste.

---

## 3. Requisitos Técnicos y Plataforma

### Dispositivos objetivo
- Web responsive para **PC, móvil y tablet**.

### Stack recomendado (2026)
- **Frontend:** HTML, CSS, JavaScript (SPA ligera). Se puede potenciar con un framework moderno (Next.js, Vite + React/Vue/Svelte) según se decida.
- **Backend / datos:** **Supabase** (autenticación, base de datos, almacenamiento, funciones serverless).
- **Hosting:** **Vercel** (deploy rápido de SPA), con alternativas como Netlify.
- **CI/CD:** GitHub Actions + Agentic Workflows para automatización de mantenimiento, revisión de calidad y despliegue.

---

## 4. Estructura de Carpetas (Guía Estándar)

> Esta estructura es un objetivo a alcanzar; el repositorio actual puede adaptarse para alinearse.

```
proyecto-nombre/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── cd.yml
│   └── agentic-workflows/
│       └── daily-repo-status.md
├── docs/
│   ├── adr/
│   ├── api/
│   └── guides/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/ (o pages/)
│   │   ├── components/
│   │   ├── lib/
│   │   ├── styles/
│   │   └── types/
│   ├── tests/
│   ├── package.json
│   └── README.md
├── backend/
├── agent-tools/
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## 5. Reglas Irrompibles (para Agentes de IA y Programadores)

### Regla #1: Seguridad y Confianza Cero
- No almacenar secretos (API keys, tokens) en el código.
- Usar variables de entorno y/o servicios de gestión de secretos.
- Validar entradas antes de ejecutar acciones (evitar inyección de prompt o comandos).

### Regla #2: Claridad y Estructura
- El código debe ser autoexplicativo; preferir claridad sobre comentarios extensos.
- Commits atómicos y descriptivos (convencionales: feat/fix/docs/refactor).
- Registrar todas las acciones de agentes IA en un log de auditoría (qué, cuándo, por qué).

### Regla #3: Calidad Impuesta por Diseño
- Definir pruebas antes de escribir funcionalidad nueva (TDD/BDD donde aplique).
- No introducir deuda técnica voluntaria; si es necesario, documentar en un ADR y crear tarea para resolverlo.

---

## 6. Flujo de Trabajo (Git/GitHub)

- **Branch principal (main):** siempre desplegable; no hacer commits directos.
- **Branches de feature:** crear ramas `feature/xxx` desde `main`.
- **Pull Requests:** único punto de entrada; deben incluir descripción clara, capturas y referencia a issue.
- **Revisión:** al menos una aprobación humana distinta del autor.
- **IA:** puede crear PRs pero nunca auto-fusionar ni desplegar sin revisión humana.

---

## 7. Próximos Pasos (Sugeridos)

1. Definir alcance inicial: ¿se parte de la estructura existente en `sitio-contable/` o se rehace en un nuevo frontend moderno?
2. Mapear contenido de los casos de estudio y preparar recursos multimedia (capturas, videos, gráficos).
3. Establecer arquitectura de despliegue (Vercel + GitHub Actions) y preparar `.env.example`.
4. Crear ADRs para decisiones clave (framework, base de datos, autenticación, despliegue).

---

*Documento generado como base para el proyecto y para que cualquier agente o desarrollador comience con claridad.*
