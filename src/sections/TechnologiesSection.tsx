import { Badge } from '../components/Badge'
import { SectionIntro } from '../components/SectionIntro'
import { cardClass, contentWidthClass, sectionClass } from '../components/styles'
import { technologies } from '../data/portfolio'

export function TechnologiesSection() {
  return (
    <section className={sectionClass} id="tecnologias" aria-labelledby="tecnologias-title">
      <div className={contentWidthClass}>
        <SectionIntro eyebrow="Tecnologías" title="Stack organizado por área." />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {technologies.map((group) => (
            <article className={cardClass} key={group.category}>
              <h3 className="mb-4 text-xl font-black leading-tight text-ink">{group.category}</h3>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {group.items.map((item) => (
                  <li key={`${group.category}-${item}`}>
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
