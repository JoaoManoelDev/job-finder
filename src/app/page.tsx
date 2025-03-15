import Image from "next/image"

import { Button } from "@/src/components/ui/button"
import peopleImg from "@/public/people.svg"

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center py-8">
      <h1 className="text-5xl font-black w-xl text-center font-maven-pro">Diga adeus às longas buscas para uma vaga</h1>

      <Button variant="outline" className="mt-10 h-11 w-60 border-foreground cursor-pointer text-lg font-mono">
        Busque uma vaga
      </Button>

      <Image
        className="h-[30rem] w-[30rem]"
        alt=""
        src={peopleImg}
      />
      
    </section>
  )
}

export default Home
