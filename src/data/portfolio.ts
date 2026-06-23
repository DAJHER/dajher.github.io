export type ExperienceItem = {
  company: string
  role: string
  period: string
  achievements: string[]
}

export type ProjectItem = {
  name: string
  description: string
  problem: string
  solution: string
  stack: string[]
}

export type TechnologyGroup = {
  category: string
  items: string[]
}

export type StatItem = {
  value: string
  label: string
}

export type ImpactItem = {
  metric: string
  title: string
  description: string
}

export const contact = {
  name: 'Dann Joel Hernández Hernández',
  displayName: 'Dann Joel Hernández Hernández',
  initials: 'DH',
  email: 'dann080490@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dajher/',
  github: 'https://github.com/DAJHER',
  location: 'Querétaro, México',
  displayLocation: 'Querétaro, México',
}

export const navItems = [
  ['Impacto', '#impacto'],
  ['Experiencia', '#experiencia'],
  ['Proyectos', '#proyectos'],
  ['Stack', '#tecnologias'],
  ['Contacto', '#contacto'],
] as const

export const featuredSkills = [
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

export const heroFocus = [
  'Sistemas internos',
  'Integraciones',
  'Automatización',
  'Bases de datos',
]

export const stats: StatItem[] = [
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

export const impact: ImpactItem[] = [
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

export const experience: ExperienceItem[] = [
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

export const projects: ProjectItem[] = [
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

export const technologies: TechnologyGroup[] = [
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
