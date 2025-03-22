import { Construction } from "lucide-react"

const MaintenancePage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl w-full items-center flex flex-col gap-4 justify-between">
        <h1 className="text-4xl font-bold">Website em Manutenção</h1>

        <Construction className="h-64 w-64 text-yellow-400 dark:text-yellow-300" />
 
        <p className="text-2xl">Estamos realizando manutenção no momento. Por favor, volte mais tarde.</p>
      </div>
    </div>
  )
}

export default MaintenancePage