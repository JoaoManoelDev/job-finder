import Image from "next/image"

import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10">
      <h1 className="text-5xl font-black w-xl text-center">Diga adeus às longas buscas para uma vaga</h1>

      <Button variant="outline" className="mt-10 h-11 w-60 border-foreground cursor-pointer text-lg font-mono">
        Busque uma vaga
      </Button>

      <Image
        className="h-[30rem] w-[30rem]"
        alt=""
        src="/people.svg"
        width={100}
        height={100}
      />
      
    </section>
  )
}

export default Home
