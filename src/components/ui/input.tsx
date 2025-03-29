import * as React from "react"

import { cn } from "@/src/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && <div className="absolute top-1/2 -translate-y-1/2 left-2.5">{icon}</div>}
      
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-base file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
          icon && "pl-9"
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
