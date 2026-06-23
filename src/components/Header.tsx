import { useState } from 'react'

import { contact, navItems } from '../data/portfolio'
import { Icon } from './Icon'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
  )
}
