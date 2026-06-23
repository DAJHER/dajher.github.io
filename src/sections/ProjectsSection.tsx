import { Badge } from '../components/Badge'
import { SectionIntro } from '../components/SectionIntro'
import { cardClass, contentWidthClass, sectionClass } from '../components/styles'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
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
                  <li key={`${project.name}-${item}`}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
