import Link from "next/link"

import { BriefcaseBusiness, Github, Instagram, Mail } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-foreground flex justify-center items-center py-5">
      <div className="max-w-6xl w-full flex justify-between items-center py-5">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BriefcaseBusiness className="text-primary-foreground" />
            <span className="font-semibold font-mono text-primary-foreground">Vagas.com</span>
          </Link>
          <p
            className="text-muted-foreground w-96"
          >
            O Vagas.com conecta candidatos a empregos ideais de maneira rápida e objetiva.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Instagram className="text-primary-foreground cursor-pointer" />
          <Github className="text-primary-foreground cursor-pointer" />
          <Mail className="text-primary-foreground cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}
