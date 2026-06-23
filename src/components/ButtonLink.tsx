import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { buttonClass, primaryButtonClass, secondaryButtonClass } from './styles'

type ButtonLinkVariant = 'primary' | 'secondary' | 'light' | 'darkOutline'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: ButtonLinkVariant
}

const variantClass: Record<ButtonLinkVariant, string> = {
  primary: primaryButtonClass,
  secondary: secondaryButtonClass,
  light: `${buttonClass} bg-surface text-ink hover:bg-accent-soft`,
  darkOutline: `${buttonClass} border-white/30 bg-transparent text-surface hover:border-accent-soft hover:text-accent-soft`,
}

export function ButtonLink({ children, className, variant = 'primary', ...props }: ButtonLinkProps) {
  return (
    <a className={`${variantClass[variant]} ${className ?? ''}`.trim()} {...props}>
      {children}
    </a>
  )
}
