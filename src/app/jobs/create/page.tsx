import { CustomInput } from "@/src/components/custom-input"
import { CustomTextarea } from "@/src/components/custom-textarea"
import { Button } from "@/src/components/ui/button"

const CreateJobPage = () => {
  return (
    <main className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-maven-pro">Cadastrar vaga</h1>

        <form className="flex flex-col gap-8">
          <div className="flex gap-10">
            <div className="flex flex-col flex-1 gap-5">
              <CustomInput className="h-11" label="Título da Vaga" />
              <CustomInput className="h-11" label="Nome da Empresa" />
              <CustomInput className="h-11" label="Website da Empresa" />
              <CustomInput className="h-11" label="Cidade" />
              <CustomInput className="h-11" label="Período" />
            </div>

            <div className="flex flex-col flex-1 gap-5">
              <CustomInput className="h-11" label="Período" />
              <CustomInput className="h-11" label="Salário Mensal" />
              <CustomTextarea label="Descrição da Vaga" className="resize-none h-[6.2rem]"/>
              <CustomTextarea label="Requisitos" className="resize-none h-[6.2rem]" />
            </div>

          </div>
          <Button className="w-36 ml-auto">Salvar</Button>
        </form>
      </div>
    </main>
  )
}

export default CreateJobPage