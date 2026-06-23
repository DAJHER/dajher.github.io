import { SectionIntro } from '../components/SectionIntro'
import { contentWidthClass, sectionClass } from '../components/styles'
import { experience } from '../data/portfolio'

export function ExperienceSection() {
  return (
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
  )
}
