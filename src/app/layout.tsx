import type { Metadata } from "next"

import "./globals.css"

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
      <body>{children}</body>
    </html>
  );
}

export default RootLayout