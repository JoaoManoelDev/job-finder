import { NextRequest, NextResponse } from "next/server"

const middleware = (request: NextRequest) => {
  const maintenanceMode = process.env.MAINTENANCE_MODE === "true" ? true : false
  
  if (maintenanceMode && request.nextUrl.pathname !== '/maintenance') {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  }

  NextResponse.next()
}

export default middleware

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
