import { Badge } from '../components/Badge'
import { SectionIntro } from '../components/SectionIntro'
import { cardClass, contentWidthClass, sectionClass } from '../components/styles'
import { impact } from '../data/portfolio'

export function ImpactSection() {
  return (
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
              <Badge variant="metric">{item.metric}</Badge>
              <h3 className="mb-3 text-2xl font-black leading-tight text-ink">{item.title}</h3>
              <p className="leading-7 text-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
