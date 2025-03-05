import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 py-8">
      <h1 className="text-5xl font-bold">Nada encontrado aqui...</h1>

      <Image
        className="h-96 w-96"
        alt=""
        src="/not-found.svg"
        width={100}
        height={100}
      />


      <div className="space-y-6 flex flex-col justify-center items-center text-muted-foreground">
        <p className="text-2xl font-light">Não foi possível encontrar a página solicitada.</p>

        <Link
          href="/"
          className={cn(buttonVariants(), "flex items-center gap-2 hover:cursor-pointer transition-all")}
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar à home
        </Link>
      </div>
    </main>
  )
}

export default NotFound