import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let ip;
    if (request.headers.get("x-real-ip")) {
        ip = request.headers.get("x-real-ip");
    } else if (request.headers.get("x-forwarded-for")) {
        ip = request.headers.get("x-forwarded-for");
    } else {
        ip = request.nextUrl.hostname;
    }
    console.log(ip);

    // let pathname = request.nextUrl.pathname
    // if (pathname === '/') {
    //     const homeUrl = new URL('/', request.url)
    //     homeUrl.searchParams.set('ip', reqIP)
    //     return NextResponse.redirect(homeUrl)
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}