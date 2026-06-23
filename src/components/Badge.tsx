import type { HTMLAttributes, ReactNode } from 'react'

import { pillClass } from './styles'

type BadgeVariant = 'pill' | 'metric'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
}

const variantClass: Record<BadgeVariant, string> = {
  pill: pillClass,
  metric: 'mb-4 inline-flex rounded-full bg-accent/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-accent',
}

export function Badge({ children, className, variant = 'pill', ...props }: BadgeProps) {
  return (
    <span className={`${variantClass[variant]} ${className ?? ''}`.trim()} {...props}>
      {children}
    </span>
  )
}
