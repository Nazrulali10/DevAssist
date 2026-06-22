import { ButtonProps } from '@/types/types'

const Button = ({onClick , className , children , disabled}:ButtonProps) => {
  return (
     <button disabled={disabled} className={`bg-slate-200 text-sm rounded-2xl px-2 py-2 ${className || ""}`} onClick={onClick}>{children}</button>
  )
}

export default Button