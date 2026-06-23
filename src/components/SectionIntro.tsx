import type { ReactNode } from 'react'

import { bodyLeadClass, eyebrowClass, heading2Class } from './styles'

type SectionIntroProps = {
  eyebrow: string
  title: string
  children?: ReactNode
}

export function SectionIntro({ eyebrow, title, children }: SectionIntroProps) {
  return (
    <div className="mb-10 max-w-4xl">
      <div className="mb-5">
        <p className={eyebrowClass}>{eyebrow}</p>
        <h2 className={heading2Class}>{title}</h2>
      </div>
      {children ? <div className={bodyLeadClass}>{children}</div> : null}
    </div>
  )
}
