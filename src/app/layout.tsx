import type { Metadata } from "next"
import { Maven_Pro } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { ThemeProvider } from "@/src/providers/theme-provider"
import { ScrollToTop } from "../components/scroll-top"

export const metadata: Metadata = {
  title: "Vagas.com",
  description: "Site desenvolvido para encontrar vagas de emprego de maneira rápida e objetiva.",
}

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven-pro'
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt-br" suppressHydrationWarning className={mavenPro.variable}>
      <body className="flex flex-col min-h-screen">
        <ScrollToTop>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="flex-1 pt-20">{children}</div>
            <Footer />
          </ThemeProvider>
        </ScrollToTop>

      </body>
    </html>
  )
}

export default RootLayout