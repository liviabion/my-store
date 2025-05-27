export interface NavLink {
  label: string
  to: string
  icon: React.ReactNode
}

export interface HeaderProps {
  className?: string
  logoWidth?: string
  logoHeight?: string
  linksLeft?: NavLink[]
  linkRight?: NavLink[]
}
