import { ComponentProps } from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface CustomTextareaProps extends ComponentProps<'textarea'> {
  label?: string
}

export const CustomTextarea = ({ label, ...props }: CustomTextareaProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      <Label>{label}</Label>
      <Textarea {...props} />
    </div>
  )
}