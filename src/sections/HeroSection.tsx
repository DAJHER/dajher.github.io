import heroImg from '../assets/hero.png'
import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import {
  contentWidthClass,
} from '../components/styles'
import { contact, featuredSkills, heroFocus, stats } from '../data/portfolio'

export function HeroSection() {
  return (
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
              <Badge key={item}>
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#proyectos">
              Ver proyectos
              <Icon name="arrow" />
            </ButtonLink>

            <ButtonLink href="/cv.pdf" download variant="secondary">
              Descargar CV
              <Icon name="download" />
            </ButtonLink>
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
              <Badge key={skill}>
                {skill}
              </Badge>
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
  )
}
