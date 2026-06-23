import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import { contentWidthClass, eyebrowClass } from '../components/styles'
import { contact } from '../data/portfolio'

export function ContactSection() {
  return (
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
          <ButtonLink
            href={`mailto:${contact.email}?subject=Contacto desde portafolio profesional`}
            variant="light"
          >
            Enviar correo
            <Icon name="mail" />
          </ButtonLink>
          <ButtonLink
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="darkOutline"
          >
            LinkedIn
            <Icon name="external" />
          </ButtonLink>
          <ButtonLink
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="darkOutline"
          >
            GitHub
            <Icon name="external" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
