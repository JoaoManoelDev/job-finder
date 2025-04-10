"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BriefcaseBusiness } from "lucide-react"

import { cn } from "@/src/lib/utils"
import { buttonVariants } from "@/src/components/ui/button"
import { ModeToggle } from "./mode-toggle"

interface NavItems {
  label: string
  href: string
}

const navItems: NavItems[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Sobre',
    href: '/about'
  },
  {
    label: 'Vagas',
    href: '/jobs'
  },
  {
    label: 'Cadastrar Vagas',
    href: '/jobs/create'
  },
]

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-center border-b fixed top-0 right-0 left-0 z-50 bg-background w-screen">
      <div className="max-w-6xl w-full flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseBusiness />
          <span className="font-semibold font-mono">Vagas.com</span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {navItems.map(navItem => (
              <Link
                className={
                  cn(
                    buttonVariants({ variant: "link" }),
                    pathname === navItem.href && 'text-blue-500'
                  )
                }
                key={navItem.label}
                href={navItem.href}
              >
                {navItem.label}
              </Link>
            ))}
          </ul>

          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
