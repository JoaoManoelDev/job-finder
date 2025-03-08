import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Abount = () => {
  return (
    <section className="flex flex-col justify-center items-center py-8">
      <div className="max-w-6xl flex">
        <div className=" flex flex-col gap-12">
          <h1 className="text-5xl font-black">
            O que você procura, <span className="text-blue-400">nós temos!</span>
          </h1>

          <div className="flex flex-col gap-8 w-xl text-lg font-semibold">
            <p>
              O <span className="text-blue-400">Vagas.com</span> é uma plataforma ideal para
              profissionais de diversas áreas que buscam novas oportunidades e empresas que precisam
              de talentos qualificados.
            </p>

            <p>
              Com uma interface intuitiva e fácil de usar, nosso board de vagas conecta profissionais
              de diferentes setores com as melhores empresas do mercado.
            </p>

            <p>
              Seja você um candidato em busca de seu próximo desafio ou uma empresa em busca de novos
              talentos, o <span className="text-blue-400">Vagas.com</span> facilita a conexão entre
              candidatos e empregadores, promovendo o crescimento e a invação em diversos setores.
            </p>
          </div>

          <Link
            href="/jobs"
            className={cn(buttonVariants(), "w-xl h-11 font-semibold")}
          >
            Encontrar vagas
            <ArrowRight />
          </Link>
        </div>

        <Image
          className="h-[30rem] w-[30rem]"
          alt=""
          src="/people.svg"
          width={100}
          height={100}
        />
      </div>
    </section>
  )
}

export default Abount