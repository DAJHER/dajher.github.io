import { useState } from 'react'

import heroImg from './assets/hero.png'

type ExperienceItem = {
  company: string
  role: string
  period: string
  achievements: string[]
}

type ProjectItem = {
  name: string
  description: string
  problem: string
  solution: string
  stack: string[]
}

type TechnologyGroup = {
  category: string
  items: string[]
}

type StatItem = {
  value: string
  label: string
}

type ImpactItem = {
  metric: string
  title: string
  description: string
}

type IconName =
  | 'arrow'
  | 'download'
  | 'mail'
  | 'external'
  | 'database'
  | 'code'
  | 'server'
  | 'menu'
  | 'close'

const contact = {
  name: 'Dann Joel Hernández Hernández',
  displayName: 'Dann Joel Hernández Hernández',
  initials: 'DH',
  email: 'dann080490@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dajher/',
  github: 'https://github.com/DAJHER',
  location: 'Querétaro, México',
  displayLocation: 'Querétaro, México',
}

const navItems = [
  ['Impacto', '#impacto'],
  ['Experiencia', '#experiencia'],
  ['Proyectos', '#proyectos'],
  ['Stack', '#tecnologias'],
  ['Contacto', '#contacto'],
] as const

const featuredSkills = [
  'FullStack',
  'Sistemas empresariales',
  'Retail / POS',
  'Flotillas',
  'Node.js',
  '.NET / C#',
  'SQL Server',
  'Oracle',
  'APIs REST/SOAP',
  'React',
  'React Native',
  'SQLite',
  'SAP',
]

const heroFocus = [
  'Sistemas internos',
  'Integraciones',
  'Automatización',
  'Bases de datos',
]

const stats: StatItem[] = [
  {
    value: '+225',
    label: 'tiendas conectadas a operación central',
  },
  {
    value: '1-2 min',
    label: 'latencia máxima en comunicación tienda-central',
  },
  {
    value: 'SAP + POS',
    label: 'pedidos, entradas y operación integrada',
  },
  {
    value: '+10 años',
    label: 'sistemas productivos y soporte continuo',
  },
]

const impact: ImpactItem[] = [
  {
    metric: '+225 tiendas',
    title: 'Operación conectada en tiempo real',
    description:
      'Evolución de la comunicación tienda-central de procesos cada 30 a 60 minutos a sincronización prácticamente en tiempo real, con diferencias operativas de 1 a 2 minutos.',
  },
  {
    metric: 'SAP + POS',
    title: 'Flujo completo de pedidos integrado',
    description:
      'Integración del flujo de pedidos con SAP consumiendo APIs de SAP y construyendo APIs para que el POS procese solicitudes, pedidos y entradas de mercancía desde punto de venta.',
  },
  {
    metric: 'Cuentas por pagar',
    title: 'Facturas a proveedores vía web service',
    description:
      'Implementación de web service para enviar facturas de pagos a proveedores hacia SAP, reduciendo captura manual y mejorando la trazabilidad administrativa.',
  },
  {
    metric: 'Retail productivo',
    title: 'Sistemas internos con continuidad operativa',
    description:
      'Desarrollo y soporte de soluciones críticas para tiendas, inventarios, POS, bases de datos, integraciones y automatización de procesos empresariales.',
  },
]

const experience: ExperienceItem[] = [
  {
    company: 'Tiendas Super Q, S.A. de C.V.',
    role: 'Full Stack Developer',
    period: 'Marzo 2016 - Actualidad',
    achievements: [
      'Desarrollo, soporte, actualización y mejora continua de sistemas empresariales internos para más de 225 tiendas.',
      'Evolución de la comunicación tienda-central de procesos periódicos cada 30 a 60 minutos a operación prácticamente en tiempo real, con latencias de 1 a 2 minutos.',
      'Integración del flujo de pedidos con SAP: consumo de APIs SAP y creación de APIs para POS orientadas a solicitudes, pedidos y entradas de mercancía.',
      'Implementación de web services para cuentas por pagar, incluyendo envío de facturas de pagos a proveedores hacia SAP.',
      'Diseño de stored procedures, consultas y procesos en SQL Server y MySQL.',
      'Implementación de soluciones orientadas a retail, tiendas de conveniencia, POS, SAP, comunicación entre sistemas y automatización operativa.',
    ],
  },
  {
    company: 'TIP México',
    role: 'Desarrollador FullStack / Sistemas Empresariales',
    period: 'Noviembre 2024 - Actualidad',
    achievements: [
      'Soporte y mejora de sistemas empresariales orientados a operación de flotillas, unidades, contratos y seguros.',
      'Mantenimiento de aplicaciones web internas con tecnologías .NET, ASP.NET/WebForms y componentes de interfaz administrativa.',
      'Desarrollo y optimización de consultas, procesos y lógica de negocio en Oracle y PL/SQL.',
      'Integración de información entre módulos operativos, administrativos y sistemas internos.',
      'Análisis de incidencias, corrección de errores y mejora continua de procesos críticos en operación.',
    ],
  },
  {
    company: 'Grupo Salinas',
    role: 'Desarrollador de Sistemas',
    period: 'Julio 2014 - Octubre 2014',
    achievements: [
      'Desarrollo de aplicaciones en ASP.NET para reporteo contable.',
      'Creación y optimización de stored procedures en SQL Server.',
      'Apoyo en soluciones internas enfocadas al procesamiento y consulta de información.',
    ],
  },
  {
    company: 'Tiendas Super Q, S.A. de C.V.',
    role: 'DBA / Desarrollador',
    period: 'Mayo 2013 - Julio 2014',
    achievements: [
      'Administración de bases de datos SQL Server, respaldos y monitoreo de procesos.',
      'Desarrollo de software para comunicación entre tiendas y central.',
      'Soporte a procesos críticos relacionados con bases de datos y operación de tiendas.',
    ],
  },
  {
    company: 'Industrias Cor SA de CV',
    role: 'Auxiliar en Sistemas',
    period: 'Junio 2012 - Mayo 2013',
    achievements: [
      'Soporte técnico en sitio y vía remota a usuarios internos.',
      'Administración del sistema ERP KEPLER.',
      'Desarrollo y administración de intranet utilizando PHP y MySQL.',
    ],
  },
]

const projects: ProjectItem[] = [
  {
    name: 'Plataforma de Comunicación POS',
    description:
      'Sistema de comunicación entre más de 225 tiendas y central para sincronizar ventas, catálogos, promociones y movimientos del punto de venta.',
    problem:
      'La comunicación tienda-central operaba por ventanas periódicas de 30 a 60 minutos, generando retrasos para consulta, seguimiento y procesamiento de información operativa.',
    solution:
      'Arquitectura con procesos automáticos, validación, reintentos, persistencia local e idempotencia para acercar la operación a tiempo real, con diferencias máximas aproximadas de 1 a 2 minutos.',
    stack: ['React.js', 'Node.js', '.NET', 'APIs REST', 'Express.js', 'Socket.IO', 'Redis', 'SQL Server'],
  },
  {
    name: 'Contralix | Gestión de Contratos',
    description:
      'Plataforma para administración de contratos, pagos, documentos y datos relacionados con acuerdos empresariales.',
    problem:
      'La información de contratos, pagos y documentos estaba dispersa en archivos, correos o registros manuales.',
    solution:
      'Plataforma web para centralizar documentación, seguimiento administrativo, archivos externos, alertas, filtros y reportes.',
    stack: ['React', 'Strapi', 'MySQL', 'DigitalOcean Spaces', 'VPS Linux', 'Nginx', 'GitHub Actions', 'node-cron'],
  },
  {
    name: 'Inventarios Offline POS',
    description:
      'Aplicación móvil para conteo físico de inventario en tienda con almacenamiento local y envío posterior al punto de venta.',
    problem:
      'Las tiendas necesitaban realizar conteos sin conexión al POS, evitando errores manuales y pérdida de información.',
    solution:
      'App offline-first en React Native con SQLite para capturar conteos localmente y sincronizarlos al recuperar conexión.',
    stack: ['React Native', 'SQLite', 'JavaScript', 'REST API', 'Java', 'POS'],
  },
  {
    name: 'Integración SAP y Sistemas Internos',
    description:
      'Servicios y procesos para integrar información operativa de POS y sistemas internos con SAP.',
    problem:
      'Los pedidos, entradas de mercancía y procesos administrativos requerían intercambio confiable entre SAP, POS y sistemas internos.',
    solution:
      'Consumo de APIs SAP y construcción de APIs para POS, permitiendo procesar solicitudes de pedido, entradas de mercancía y flujos administrativos desde punto de venta. También se integró un web service para envío de facturas de pagos a proveedores en cuentas por pagar.',
    stack: ['Node.js', 'C#', '.NET', 'SAP', 'APIs REST', 'SQL Server'],
  },
  {
    name: 'Automatización Operativa',
    description:
      'Servicios y herramientas para automatizar tareas repetitivas, procesamiento de datos y flujos internos de negocio.',
    problem:
      'Algunos procesos dependían de tareas manuales que generaban demoras, errores y mayor carga operativa.',
    solution:
      'Servicios, scripts y procesos automatizados para mejorar tiempos de respuesta, reducir errores y facilitar seguimiento.',
    stack: ['Node.js', 'VB.NET', 'PowerShell', 'SQL Server', 'MySQL', 'APIs'],
  },
  {
    name: 'Gestión Operativa de Flotillas',
    description:
      'Mantenimiento y mejora de plataforma interna para unidades, contratos, seguros y procesos administrativos.',
    problem:
      'La operación requiere controlar información crítica evitando inconsistencias entre módulos y procesos manuales.',
    solution:
      'Mejoras en aplicaciones internas, consultas Oracle, procesos PL/SQL e interfaces administrativas para reducir incidencias.',
    stack: ['.NET', 'ASP.NET/WebForms', 'Oracle', 'PL/SQL', 'JavaScript', 'Kendo UI', 'APIs'],
  },
]

const technologies: TechnologyGroup[] = [
  {
    category: 'Frontend y móvil',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'Angular', 'HTML'],
  },
  {
    category: 'Backend',
    items: ['Node.js', '.NET', 'C#', 'ASP.NET', 'ASP.NET WebForms', 'Java Spring Boot', 'APIs REST', 'SOAP', 'Swagger'],
  },
  {
    category: 'Bases de datos',
    items: ['SQL Server', 'MySQL', 'Oracle', 'PL/SQL', 'SQLite', 'PostgreSQL', 'MongoDB', 'Stored Procedures'],
  },
  {
    category: 'Infraestructura y DevOps',
    items: ['Linux', 'Ubuntu', 'IIS', 'Nginx', 'Docker', 'VPS', 'PowerShell', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Integraciones y negocio',
    items: ['SAP', 'ERP KEPLER', 'POS', 'Flotillas', 'Contratos', 'Seguros', 'Socket.IO', 'Retail', 'Automatización'],
  },
]

const sectionClass = 'border-b border-line bg-surface px-5 py-10 sm:px-8 md:py-12 lg:px-16 lg:py-16'
const contentWidthClass = 'mx-auto w-full max-w-7xl'
const eyebrowClass = 'mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent'
const heading2Class = 'text-balance text-3xl font-black leading-tight text-ink md:text-5xl'
const bodyLeadClass = 'max-w-3xl text-base leading-8 text-copy md:text-lg'
const cardClass =
  'min-w-0 rounded-[8px] border border-line bg-surface-raised p-5 shadow-[0_12px_34px_rgba(16,24,40,0.05)] transition-colors duration-200 hover:border-accent/45 sm:p-6'
const buttonClass =
  'inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-transparent px-5 text-center text-sm font-black no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto'
const primaryButtonClass = `${buttonClass} bg-accent text-white hover:bg-accent-strong`
const secondaryButtonClass = `${buttonClass} border-line-strong bg-white text-ink hover:border-accent hover:text-accent`
const pillClass =
  'max-w-full rounded-full border border-line bg-surface-muted px-3 py-1.5 text-xs font-black text-ink'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    download: 'M12 3v12m0 0 5-5m-5 5-5-5M5 21h14',
    mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
    external: 'M7 17 17 7m0 0H9m8 0v8',
    database: 'M4 7c0-2 4-4 8-4s8 2 8 4-4 4-8 4-8-2-8-4Zm0 0v10c0 2 4 4 8 4s8-2 8-4V7m-16 5c0 2 4 4 8 4s8-2 8-4',
    code: 'm9 18-6-6 6-6m6 0 6 6-6 6',
    server: 'M4 6h16v5H4zM4 13h16v5H4zM7 8h.01M7 15h.01',
    menu: 'M4 7h16M4 12h16M4 17h16',
    close: 'M6 6l12 12M18 6 6 18',
  }

  return (
    <svg className="size-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={paths[name]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-10 max-w-4xl">
      <div className="mb-5">
        <p className={eyebrowClass}>{eyebrow}</p>
        <h2 className={heading2Class}>{title}</h2>
      </div>
      {children ? <div className={bodyLeadClass}>{children}</div> : null}
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/92 px-3 py-2 shadow-[0_8px_24px_rgba(16,24,40,0.06)] backdrop-blur md:px-6"
        aria-label="Principal"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[8px] bg-white/75 p-1.5 ring-1 ring-line/70">
          <a
            className="grid size-11 shrink-0 place-items-center rounded-[7px] bg-ink text-sm font-black text-white no-underline transition-colors duration-200 hover:bg-accent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent"
            href="#inicio"
            aria-label="Inicio"
            onClick={() => setIsMenuOpen(false)}
          >
            {contact.initials}
          </a>

          <span className="min-w-0 flex-1 truncate text-sm font-black text-ink md:hidden">
            {contact.displayName}
          </span>

          <button
            className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-[7px] border border-line bg-white px-3 text-sm font-black text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent md:hidden"
            type="button"
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span>{isMenuOpen ? 'Cerrar' : 'Menú'}</span>
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>

          <div className="hidden max-w-full flex-wrap items-center gap-1 md:flex md:justify-end">
            {navItems.map(([label, href]) => (
              <a
                className="rounded-[6px] px-3 py-2 text-sm font-black text-copy-muted no-underline transition-colors duration-200 hover:bg-surface-muted hover:text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`${isMenuOpen ? 'grid' : 'hidden'} mx-auto mt-2 max-w-7xl gap-1 rounded-[8px] border border-line bg-white p-2 shadow-[0_16px_32px_rgba(16,24,40,0.08)] md:hidden`}
          id="site-menu"
        >
          {navItems.map(([label, href]) => (
            <a
              className="rounded-[6px] px-3 py-3 text-sm font-black text-copy-muted no-underline transition-colors duration-200 hover:bg-surface-muted hover:text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={href}
              key={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="overflow-x-clip pt-[4.75rem]">
      <section
        className="relative flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden border-b border-line bg-surface px-5 pb-8 pt-6 sm:px-8 lg:px-16"
        id="inicio"
      >
        <div className={`${contentWidthClass} relative z-10 grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_430px] lg:gap-16`}>
          <div className="max-w-5xl min-w-0">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <p className="m-0 border-l-4 border-accent pl-3 text-xs font-black uppercase tracking-[0.22em] text-accent">
                Portafolio profesional
              </p>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-copy-muted">
                {contact.displayLocation}
              </span>
            </div>

            <h1 className="text-balance text-5xl font-black leading-[0.94] text-ink sm:text-6xl lg:text-7xl">
              {contact.displayName}
            </h1>

            <p className="mt-6 max-w-4xl text-2xl font-black leading-tight text-ink md:text-4xl">
              Desarrollador FullStack especializado en software empresarial, integraciones y automatización operativa.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-copy md:text-xl">
              Construyo y mantengo sistemas internos para operación real: retail, POS,
              flotillas, APIs, bases de datos, aplicaciones móviles y procesos críticos en producción.
            </p>

            <div className="mt-7 flex flex-wrap gap-2" aria-label="Enfoque profesional">
              {heroFocus.map((item) => (
                <span className={pillClass} key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="#proyectos">
                Ver proyectos
                <Icon name="arrow" />
              </a>

              <a className={secondaryButtonClass} href="/cv.pdf" download>
                Descargar CV
                <Icon name="download" />
              </a>
            </div>
          </div>

          <aside
            className="relative min-w-0 rounded-[8px] border border-line bg-white p-5 shadow-[0_24px_70px_rgba(16,24,40,0.12)] sm:p-7"
            aria-label="Resumen profesional"
          >
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-accent">Ficha profesional</p>
                <h2 className="text-2xl font-black leading-tight text-ink">FullStack Developer</h2>
              </div>
              <img className="block w-20 shrink-0" src={heroImg} alt="" />
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                ['Especialidad', 'Sistemas empresariales, POS e integraciones'],
                ['Tecnologías base', 'React, Node.js, .NET, SQL Server, Oracle'],
                ['Enfoque', 'Soluciones mantenibles para operación interna'],
                ['Experiencia', '+10 años en ambientes productivos'],
              ].map(([title, text]) => (
                <div className="rounded-[8px] border border-line bg-surface p-4" key={title}>
                  <strong className="block text-xs font-black uppercase tracking-[0.16em] text-accent">{title}</strong>
                  <span className="mt-1 block text-sm font-bold leading-6 text-ink">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Skills principales">
              {featuredSkills.map((skill) => (
                <span className={pillClass} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className={`${contentWidthClass} relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
          {stats.map((stat) => (
            <article className="rounded-[8px] border border-line bg-white p-5 shadow-[0_10px_28px_rgba(16,24,40,0.04)]" key={stat.label}>
              <strong className="mb-2 block text-3xl font-black text-ink">{stat.value}</strong>
              <span className="text-sm font-bold leading-6 text-copy-muted">{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="impacto" aria-labelledby="impacto-title">
        <div className={contentWidthClass}>
          <SectionIntro eyebrow="Impacto medible" title="Resultados en operación real.">
            <p>
              Estos resultados resumen el tipo de problemas que he resuelto: escala,
              integración entre sistemas, reducción de latencia y continuidad operativa.
            </p>
          </SectionIntro>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {impact.map((item) => (
              <article className={`${cardClass} border-l-4 border-l-accent`} key={item.title}>
                <span className="mb-4 inline-flex rounded-full bg-accent/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-accent">
                  {item.metric}
                </span>
                <h3 className="mb-3 text-2xl font-black leading-tight text-ink">{item.title}</h3>
                <p className="leading-7 text-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass} id="experiencia" aria-labelledby="experiencia-title">
        <div className={contentWidthClass}>
          <SectionIntro eyebrow="Experiencia relevante" title="Dónde he aplicado este impacto.">
            <p>
              Roles recientes y directamente relacionados con sistemas empresariales,
              integración, soporte productivo y operación crítica.
            </p>
          </SectionIntro>

          <div className="grid border-t border-line">
            {experience.slice(0, 2).map((item) => (
              <article
                className="grid grid-cols-1 gap-5 border-b border-line py-7 md:grid-cols-[0.9fr_1.7fr] lg:gap-16"
                key={`${item.company}-${item.role}-${item.period}`}
              >
                <div>
                  <span className="mb-3 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-accent">
                    {item.period}
                  </span>
                  <h3 className="mb-2 text-2xl font-black leading-tight text-ink">{item.role}</h3>
                  <p className="font-bold text-copy-muted">{item.company}</p>
                </div>

                <ul className="m-0 list-none space-y-3 p-0">
                  {item.achievements.map((achievement) => (
                    <li
                      className="relative pl-6 leading-7 text-copy before:absolute before:left-0 before:top-3 before:size-2 before:rounded-full before:bg-accent"
                      key={achievement}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass} id="proyectos" aria-labelledby="proyectos-title">
        <div className={contentWidthClass}>
          <SectionIntro eyebrow="Proyectos clave" title="Casos que resumen mi perfil técnico.">
            <p>
              Selección corta de proyectos con impacto operativo, integración entre sistemas
              y reducción de trabajo manual.
            </p>
          </SectionIntro>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article className={`${cardClass} flex flex-col`} key={project.name}>
                <h3 className="mb-3 text-2xl font-black leading-tight text-ink">{project.name}</h3>
                <p className="mb-5 leading-7 text-copy">{project.description}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[8px] border border-line bg-surface p-4">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-accent">
                      Problema
                    </span>
                    <p className="text-sm leading-6 text-copy">{project.problem}</p>
                  </div>

                  <div className="rounded-[8px] border border-line bg-surface p-4">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-accent">
                      Solución
                    </span>
                    <p className="text-sm leading-6 text-copy">{project.solution}</p>
                  </div>
                </div>

                <ul className="mt-auto flex list-none flex-wrap gap-2 p-0 pt-6">
                  {project.stack.map((item) => (
                    <li className={pillClass} key={`${project.name}-${item}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass} id="tecnologias" aria-labelledby="tecnologias-title">
        <div className={contentWidthClass}>
          <SectionIntro eyebrow="Tecnologías" title="Stack organizado por área." />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {technologies.map((group) => (
              <article className={cardClass} key={group.category}>
                <h3 className="mb-4 text-xl font-black leading-tight text-ink">{group.category}</h3>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {group.items.map((item) => (
                    <li className={pillClass} key={`${group.category}-${item}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-ink px-5 py-10 text-surface sm:px-8 md:py-12 lg:px-16 lg:py-16"
        id="contacto"
        aria-labelledby="contacto-title"
      >
        <div className={`${contentWidthClass} grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]`}>
          <div>
            <p className={`${eyebrowClass} text-accent-soft`}>Contacto</p>
            <h2 className="text-balance text-3xl font-black leading-tight text-surface md:text-5xl" id="contacto-title">
              Hablemos de una solución clara, mantenible y alineada al negocio.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-surface/78">
              Disponible para desarrollo, integración de sistemas, automatización,
              soporte y mejora de plataformas empresariales.
            </p>
            <p className="mt-4 font-bold text-surface/75">{contact.email}</p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              className={`${buttonClass} bg-surface text-ink hover:bg-accent-soft`}
              href={`mailto:${contact.email}?subject=Contacto desde portafolio profesional`}
            >
              Enviar correo
              <Icon name="mail" />
            </a>
            <a
              className={`${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <Icon name="external" />
            </a>
            <a
              className={`${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <Icon name="external" />
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default App
