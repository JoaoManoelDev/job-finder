import { CreateJobForm } from "./create-job-form"

const CreateJobPage = () => {
  return (
    <main className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-maven-pro">Cadastrar vaga</h1>

        <CreateJobForm />
      </div>
    </main>
  )
}

export default CreateJobPage