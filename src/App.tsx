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

type ProfessionalSkill = {
  title: string
  description: string
}

type StatItem = {
  value: string
  label: string
}

const contact = {
  name: 'Dann Joel Hernández Hernández',
  initials: 'DH',
  email: 'dann080490@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dajher/',
  github: 'https://github.com/DAJHER',
}

const featuredSkills = [
  'React',
  'React Native',
  'Node.js',
  '.NET',
  'C#',
  'SQL Server',
  'MySQL',
  'SQLite',
  'APIs REST/SOAP',
  'SAP',
]

const stats: StatItem[] = [
  {
    value: '+10',
    label: 'años de experiencia',
  },
  {
    value: 'Retail',
    label: 'POS, tiendas y operación',
  },
  {
    value: 'FullStack',
    label: 'web, móvil, APIs y bases de datos',
  },
  {
    value: 'Soporte',
    label: 'mejora y mantenimiento continuo',
  },
]

const experience: ExperienceItem[] = [
  {
    company: 'Tiendas Super Q, S.A. de C.V.',
    role: 'Full Stack Developer',
    period: 'Marzo 2016 - Actualidad',
    achievements: [
      'Desarrollo, soporte, actualización y mejora continua de sistemas empresariales internos.',
      'Diseño y mantenimiento de APIs y web services en C#, .NET y Node.js.',
      'Creación de servicios para procesamiento de datos e integración entre sistemas.',
      'Diseño de stored procedures, consultas y procesos en SQL Server y MySQL.',
      'Implementación de soluciones orientadas a retail, tiendas de conveniencia, POS, SAP y automatización operativa.',
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
    name: 'POS Comunicación',
    description:
      'Sistema de comunicación entre tiendas y central para sincronizar información operativa como ventas, catálogos, promociones y movimientos del punto de venta.',
    problem:
      'Las tiendas necesitaban enviar y recibir información de forma confiable hacia una base central, pero existían problemas de conectividad, retrasos, reintentos manuales y riesgo de información duplicada o incompleta.',
    solution:
      'Se diseñó una arquitectura de comunicación con procesos automáticos, control de reintentos, validación de mensajes, persistencia local e idempotencia para evitar duplicados. Esto permite que cada tienda continúe operando ante fallas temporales de conexión y sincronice la información cuando el servicio se restablece.',
    stack: [
      'React.js',
      'Node.js',
      '.NET',
      'APIs REST',
      'Express.js',
      'Socket.IO',
      'Redis',
      'SQL Server',
    ],
  },
  {
    name: 'Contralix',
    description:
      'Plataforma para administración de contratos, pagos, documentos y datos relacionados con arrendamientos o acuerdos empresariales.',
    problem:
      'La información de contratos, pagos y documentos podía estar dispersa en archivos, correos o registros manuales, dificultando el seguimiento de vencimientos, pagos pendientes y consulta histórica.',
    solution:
      'Se construyó una plataforma web para centralizar el control, documentación y seguimiento administrativo mediante modelos estructurados para contratos, pagos, ubicaciones y documentos. Además, se integró almacenamiento externo para archivos y una base escalable para alertas, filtros, reportes y gestión documental.',
    stack: [
      'React',
      'Strapi',
      'MySQL',
      'DigitalOcean Spaces',
      'VPS Linux',
      'Nginx',
      'GitHub Actions',
      'node-cron',
      'APIs REST',
    ],
  },
  {
    name: 'App Inventario',
    description:
      'Aplicación móvil para conteo físico de inventario en tienda, con almacenamiento local y envío posterior al punto de venta.',
    problem:
      'Las tiendas necesitaban realizar conteos de inventario aun sin conexión al POS, evitando errores manuales, retrasos y pérdida de información durante el proceso.',
    solution:
      'Se desarrolló una aplicación offline-first en React Native que almacena los conteos localmente con SQLite y permite enviarlos al punto de venta cuando el dispositivo recupera conexión.',
    stack: ['React Native', 'SQLite', 'JavaScript', 'REST API', 'Java', 'POS'],
  },
  {
    name: 'Integraciones con SAP',
    description:
      'Servicios y procesos para integrar información operativa de sistemas internos con SAP y otros sistemas empresariales.',
    problem:
      'Los procesos administrativos y operativos requerían intercambio de información entre plataformas internas y sistemas externos, generando reprocesos, validaciones manuales y riesgo de inconsistencias.',
    solution:
      'Se desarrollaron APIs, servicios y procesos automatizados para centralizar información, validar datos y mejorar la comunicación entre sistemas internos, SAP y plataformas administrativas.',
    stack: ['Node.js', 'C#', '.NET', 'SAP', 'APIs REST', 'SQL Server'],
  },
  {
    name: 'Automatización de Procesos Internos',
    description:
      'Servicios y herramientas para automatizar tareas operativas, procesamiento de datos y flujos internos de negocio.',
    problem:
      'Algunos procesos dependían de tareas manuales o revisiones repetitivas, lo que generaba demoras, errores humanos y mayor carga operativa para los equipos internos.',
    solution:
      'Se implementaron servicios, scripts y procesos automatizados para mejorar tiempos de respuesta, reducir errores y facilitar el seguimiento de información crítica para la operación.',
    stack: ['Node.js', 'VB.NET', 'PowerShell', 'SQL Server', 'MySQL', 'APIs'],
  },
]

const technologies: TechnologyGroup[] = [
  {
    category: 'Frontend y móvil',
    items: [
      'React',
      'React Native',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'JavaScript',
      'Angular',
      'HTML',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      '.NET',
      'C#',
      'ASP.NET',
      'Java Spring Boot',
      'APIs REST',
      'SOAP',
      'Swagger',
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      'SQL Server',
      'MySQL',
      'SQLite',
      'PostgreSQL',
      'Oracle',
      'MongoDB',
      'Stored Procedures',
    ],
  },
  {
    category: 'Infraestructura y DevOps',
    items: [
      'Linux',
      'Ubuntu',
      'IIS',
      'Nginx',
      'Docker',
      'VPS',
      'PowerShell',
      'Git',
      'GitHub Actions',
    ],
  },
  {
    category: 'Integraciones y negocio',
    items: [
      'SAP',
      'ERP KEPLER',
      'POS',
      'Socket.IO',
      'Retail',
      'Tiendas de conveniencia',
      'Automatización',
      'Soporte técnico',
    ],
  },
]

const professionalSkills: ProfessionalSkill[] = [
  {
    title: 'Trabajo en equipo',
    description:
      'Colaboración con usuarios, áreas operativas, soporte e infraestructura para entregar soluciones alineadas a necesidades reales.',
  },
  {
    title: 'Comunicación clara',
    description:
      'Capacidad para explicar problemas técnicos, documentar procesos y traducir requerimientos del negocio a soluciones concretas.',
  },
  {
    title: 'Resolución de problemas',
    description:
      'Análisis de incidencias, búsqueda de causa raíz y propuesta de mejoras prácticas para sistemas en operación.',
  },
  {
    title: 'Responsabilidad',
    description:
      'Seguimiento de tareas, atención a sistemas críticos y compromiso con la estabilidad de plataformas productivas.',
  },
  {
    title: 'Adaptabilidad',
    description:
      'Experiencia trabajando con distintas tecnologías, entornos y prioridades de negocio en proyectos web, móviles y backend.',
  },
  {
    title: 'Aprendizaje continuo',
    description:
      'Interés constante por mejorar herramientas, procesos y prácticas de desarrollo para construir soluciones mantenibles.',
  },
]

const eyebrowClass = 'mb-3.5 text-[0.82rem] font-extrabold uppercase text-accent'
const heading2Class =
  'mb-0 text-[clamp(2rem,3.7vw,3.35rem)] leading-[1.05] text-ink'
const buttonClass =
  'inline-flex min-h-[46px] items-center justify-center rounded-lg border border-transparent px-[18px] font-extrabold no-underline transition-colors duration-150 max-[560px]:w-full'
const primaryButtonClass = `${buttonClass} bg-ink text-surface hover:bg-[#111c2f]`
const secondaryButtonClass = `${buttonClass} border-line-strong bg-surface text-ink hover:border-accent hover:text-accent`
const pillClass =
  'rounded-full border border-line bg-surface-muted px-2.5 py-[7px] text-sm font-bold text-ink'
const sectionClass =
  'border-b border-line px-[clamp(20px,5vw,72px)] py-[clamp(64px,9vw,112px)]'
const sectionHeadingClass = 'mb-9 max-w-[820px]'

function App() {
  return (
    <main>
      <section
        className="flex min-h-[92svh] flex-col gap-[72px] border-b border-line bg-surface px-[clamp(20px,5vw,72px)] pb-16 pt-7 max-[860px]:min-h-[auto] max-[860px]:gap-[46px]"
        id="inicio"
      >
        <nav
          className="flex items-center justify-between gap-6 max-[860px]:items-start max-[560px]:flex-col"
          aria-label="Principal"
        >
          <a
            className="grid size-[46px] place-items-center rounded-lg bg-ink font-extrabold text-surface no-underline"
            href="#inicio"
            aria-label="Inicio"
          >
            {contact.initials}
          </a>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2.5 max-[560px]:justify-start [&_a]:text-[0.94rem] [&_a]:font-bold [&_a]:text-copy-muted [&_a]:no-underline [&_a:hover]:text-ink">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="m-auto grid w-[min(1160px,100%)] grid-cols-[minmax(0,1.08fr)_minmax(300px,0.7fr)] items-center gap-[clamp(40px,7vw,92px)] max-[860px]:grid-cols-1">
          <div className="max-w-[820px]">
            <p className={eyebrowClass}>Desarrollador FullStack</p>

            <h1 className="mb-6 max-w-[820px] text-[clamp(2.6rem,7vw,6.1rem)] leading-[0.98] text-ink">
              Desarrollo soluciones empresariales para operación, integración y
              automatización.
            </h1>

            <p className="max-w-[720px] text-[clamp(1.08rem,2vw,1.32rem)] text-copy">
              Soy desarrollador FullStack con más de 10 años de experiencia en
              sistemas empresariales, APIs, bases de datos, plataformas web,
              aplicaciones móviles, soporte técnico e integración de sistemas
              para retail y operación interna.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className={primaryButtonClass} href="#proyectos">
                Ver proyectos
              </a>

              <a className={secondaryButtonClass} href="/cv.pdf" download>
                Descargar CV
              </a>
            </div>
          </div>

          <aside
            className="rounded-lg border border-line bg-surface-raised p-[clamp(22px,4vw,34px)]"
            aria-label="Resumen profesional"
          >
            <img className="mx-auto mb-[30px] block w-[min(205px,64%)]" src={heroImg} alt="" />

            <p className="mb-2 font-extrabold text-accent">Perfil profesional</p>

            <strong className="block text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.16] text-ink">
              FullStack orientado a sistemas empresariales, POS, integraciones,
              bases de datos y despliegues productivos.
            </strong>

            <div className="mt-[26px] flex flex-wrap gap-2" aria-label="Skills principales">
              {featuredSkills.map((skill) => (
                <span className={pillClass} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div
          className="mx-auto grid w-[min(1160px,100%)] grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1"
          aria-label="Resumen de experiencia"
        >
          {stats.map((stat) => (
            <article
              className="rounded-lg border border-line bg-surface-raised p-5"
              key={stat.label}
            >
              <strong className="mb-1 block text-2xl text-ink">{stat.value}</strong>
              <span className="text-sm font-bold text-copy-muted">{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${sectionClass} grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-[clamp(28px,6vw,84px)] max-[860px]:grid-cols-1`}
        id="sobre-mi"
        aria-labelledby="sobre-mi-title"
      >
        <div>
          <p className={eyebrowClass}>Sobre mí</p>
          <h2 className={heading2Class} id="sobre-mi-title">
            Experiencia técnica con enfoque de negocio.
          </h2>
        </div>

        <p className="max-w-[780px] text-[1.12rem] leading-[1.72] text-copy">
          Soy desarrollador FullStack con experiencia en el diseño, desarrollo,
          soporte, actualización y mejora continua de sistemas empresariales,
          APIs, bases de datos, servidores Linux y plataformas administrativas
          internas.
          <br />
          <br />
          He trabajado en soluciones orientadas al sector retail y tiendas de
          conveniencia, incluyendo sistemas POS, integración entre tiendas y
          centrales, automatización de procesos operativos e integración con SAP.
          <br />
          <br />
          También he desarrollado aplicaciones móviles orientadas a procesos
          operativos internos, integrando funcionalidades como captura de
          información, operación en campo, almacenamiento local, sincronización
          de datos y funcionamiento online/offline según las necesidades del
          negocio.
          <br />
          <br />
          Mi enfoque está en construir, mantener y optimizar soluciones
          prácticas, escalables y alineadas a las necesidades reales del negocio.
        </p>
      </section>

      <section
        className={sectionClass}
        id="habilidades"
        aria-labelledby="habilidades-title"
      >
        <div className={sectionHeadingClass}>
          <p className={eyebrowClass}>Habilidades profesionales</p>
          <h2 className={heading2Class} id="habilidades-title">
            Forma de trabajo enfocada en colaboración, claridad y resultados.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
          {professionalSkills.map((skill) => (
            <article
              className="rounded-lg border border-line bg-surface-raised p-6"
              key={skill.title}
            >
              <h3 className="mb-3 text-xl leading-tight text-ink">{skill.title}</h3>
              <p className="text-copy">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={sectionClass}
        id="experiencia"
        aria-labelledby="experiencia-title"
      >
        <div className={sectionHeadingClass}>
          <p className={eyebrowClass}>Experiencia</p>
          <h2 className={heading2Class} id="experiencia-title">
            Roles, responsabilidades y logros.
          </h2>
        </div>

        <div className="grid border-t border-line">
          {experience.map((item) => (
            <article
              className="grid grid-cols-[minmax(240px,0.65fr)_minmax(0,1.35fr)] gap-[clamp(24px,5vw,72px)] border-b border-line py-7 max-[860px]:grid-cols-1"
              key={`${item.company}-${item.role}-${item.period}`}
            >
              <div>
                <span className="mb-2.5 block text-sm font-extrabold text-accent">
                  {item.period}
                </span>
                <h3 className="mb-3 text-xl leading-tight text-ink">{item.role}</h3>
                <p className="text-copy-muted">{item.company}</p>
              </div>

              <ul className="m-0 list-none p-0">
                {item.achievements.map((achievement) => (
                  <li
                    className="relative pl-[18px] text-copy before:absolute before:left-0 before:top-[0.72em] before:size-1.5 before:rounded-full before:bg-accent [&+li]:mt-2.5"
                    key={achievement}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className={sectionClass}
        id="proyectos"
        aria-labelledby="proyectos-title"
      >
        <div className={sectionHeadingClass}>
          <p className={eyebrowClass}>Proyectos</p>
          <h2 className={heading2Class} id="proyectos-title">
            Problema, solución y stack técnico.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
          {projects.map((project) => (
            <article
              className="flex min-h-[430px] flex-col rounded-lg border border-line bg-surface-raised p-6 max-[860px]:min-h-[auto]"
              key={project.name}
            >
              <h3 className="mb-3 text-xl leading-tight text-ink">{project.name}</h3>

              <p className="mb-[18px] text-[1.02rem] leading-[1.58] text-copy">
                {project.description}
              </p>

              <div className="mt-3.5">
                <span className="mb-1.5 block text-[0.82rem] font-extrabold uppercase text-accent">
                  Problema
                </span>
                <p className="text-copy">{project.problem}</p>
              </div>

              <div className="mt-3.5">
                <span className="mb-1.5 block text-[0.82rem] font-extrabold uppercase text-accent">
                  Solución
                </span>
                <p className="text-copy">{project.solution}</p>
              </div>

              <ul className="mt-auto flex list-none flex-wrap gap-2 p-0 pt-[22px]">
                {project.stack.map((item) => (
                  <li className={pillClass} key={`${project.name}-${item}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className={sectionClass}
        id="tecnologias"
        aria-labelledby="tecnologias-title"
      >
        <div className={sectionHeadingClass}>
          <p className={eyebrowClass}>Tecnologías</p>
          <h2 className={heading2Class} id="tecnologias-title">
            Stack organizado por área.
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 max-[1040px]:grid-cols-2 max-[560px]:grid-cols-1">
          {technologies.map((group) => (
            <article
              className="rounded-lg border border-line bg-surface-raised p-6"
              key={group.category}
            >
              <h3 className="mb-3 text-xl leading-tight text-ink">{group.category}</h3>

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
      </section>

      <section
        className="bg-ink px-[clamp(20px,5vw,72px)] py-[clamp(64px,9vw,112px)] text-surface"
        id="contacto"
        aria-labelledby="contacto-title"
      >
        <p className={`${eyebrowClass} text-accent-soft`}>Contacto</p>

        <h2
          className="mb-0 max-w-[820px] text-[clamp(2rem,3.7vw,3.35rem)] leading-[1.05] text-surface"
          id="contacto-title"
        >
          Hablemos de una solución clara, mantenible y alineada al negocio.
        </h2>

        <p className="mt-6 max-w-[720px] text-lg text-surface/80">
          Disponible para proyectos de desarrollo, integración de sistemas,
          automatización, soporte y mejora de plataformas empresariales.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className={`${buttonClass} bg-surface text-ink hover:bg-[#eef2f6]`}
            href={`mailto:${contact.email}`}
          >
            Email
          </a>

          <a
            className={`${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className={`${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className={`${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`}
            href="/cv.pdf"
            download
          >
            Descargar CV PDF
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
