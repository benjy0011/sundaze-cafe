import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = ({
  className,
  ...props
}: InputProps) => {
  return (
    <input
      onWheel={(e) => e.currentTarget.blur()}
      className={
        cn(
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          "focus:outline-0 focus:ring-0 border-foreground border-b-2 py-1 font-playfair-display w-full", 
          className
        )
      } 
      {...props} 
    />
  )
}
export default Input