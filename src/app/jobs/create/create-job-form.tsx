"use client"

import { useActionState } from "react"

import { CustomInput } from "@/src/components/custom-input"
import { CustomTextarea } from "@/src/components/custom-textarea"
import { Button } from "@/src/components/ui/button"
import { createJob } from "@/src/actions/jobs"

export const CreateJobForm = () => {
  const [_state, createJobAction, isPending] = useActionState(createJob, null)

  return (
    <form className="flex flex-col gap-8" action={createJobAction}>
      <div className="flex gap-10">
        <div className="flex flex-col flex-1 gap-5">
          <CustomInput
            id="title"
            name="title"
            className="h-11"
            label="Título da Vaga"
          />
          <CustomInput
            id="company"
            name="company"
            className="h-11"
            label="Nome da Empresa"
          />
          <CustomInput
            id="company_website"
            name="company_website"
            className="h-11"
            label="Website da Empresa"
          />
          <CustomInput
            id="city"
            name="city"
            className="h-11"
            label="Cidade"
          />
          <CustomInput
            id="schedule"
            name="schedule"
            className="h-11"
            label="Período"
          />
        </div>

        <div className="flex flex-col flex-1 gap-5">
          <CustomInput
            id="number_of_positions"
            name="number_of_positions"
            className="h-11"
            label="Quantidade de Vagas"
          />
          <CustomInput
            id="salary"
            name="salary"
            className="h-11"
            label="Salário Mensal"
          />
          <CustomTextarea
            id="description"
            name="description"
            label="Descrição da Vaga"
            className="resize-none h-[6.2rem]"
          />
          <CustomTextarea
            id="requirements"
            name="requirements"
            label="Requisitos"
            className="resize-none h-[6.2rem]"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-36 ml-auto cursor-pointer"
        disabled={isPending}
      >
        {isPending ? 'Salvando...' : 'Salvar'}
      </Button>
    </form>
  )
}
