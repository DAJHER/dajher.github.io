export type IconName =
  | 'arrow'
  | 'download'
  | 'mail'
  | 'external'
  | 'database'
  | 'code'
  | 'server'
  | 'menu'
  | 'close'

const paths: Record<IconName, string> = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  download: 'M12 3v12m0 0 5-5m-5 5-5-5M5 21h14',
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
  external: 'M7 17 17 7m0 0H9m8 0v8',
  database: 'M4 7c0-2 4-4 8-4s8 2 8 4-4 4-8 4-8-2-8-4Zm0 0v10c0 2 4 4 8 4s8-2 8-4V7m-16 5c0 2 4 4 8 4s8-2 8-4',
  code: 'm9 18-6-6 6-6m6 0 6 6-6 6',
  server: 'M4 6h16v5H4zM4 13h16v5H4zM7 8h.01M7 15h.01',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
}

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="size-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={paths[name]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
