import '../styles/global.css'

export interface IconProps {
  icon: string,
}

export function Icon({ icon }: IconProps) {
  return (
    <>
      <img src={icon} className="w-full h-full"></img>
    </>
  )
}