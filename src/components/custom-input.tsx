import { ComponentProps } from "react"
import { Label } from "@radix-ui/react-dropdown-menu"

import { Input } from "@/src/components/ui/input"

interface CustomInputProps extends ComponentProps<'input'> {
  label?: string
}

export const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  )
}