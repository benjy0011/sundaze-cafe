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
    <div className="input-wrapper">
      <input
        onWheel={(e) => e.currentTarget.blur()}
        className={
          cn("input",
            className
          )
        } 
        {...props} 
      />
    </div>
  )
}
export default Input