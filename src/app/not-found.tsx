import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { buttonVariants } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import notFoundImg from "@/public/not-found.svg"

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 py-8">
      <h1 className="text-5xl font-bold">Nada encontrado aqui...</h1>

      <Image
        className="h-[30rem] w-[30rem]"
        alt=""
        src={notFoundImg}
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