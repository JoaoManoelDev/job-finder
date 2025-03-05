import type { Metadata } from "next"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Vagas.com",
  description: "Site desenvolvido para encontrar vagas de emprego de maneira rápida e objetiva.",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout