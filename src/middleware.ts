import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getLocalAdcode } from '@/lib/service';


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let ip = '';
    if (request.headers.get("x-real-ip")) {
        ip = request.headers.get("x-real-ip") || '';
    } else if (request.headers.get("x-forwarded-for")) {
        ip = request.headers.get("x-forwarded-for") || '';
    } else {
        ip = request.nextUrl.hostname;
    }
    console.log(ip);
    let pathname = request.nextUrl.pathname
    if (pathname === '/') {
        const newUrl = new URL('/welcome', request.url)
        const clientIP = ip.substring(ip.lastIndexOf(':')+1)
        const adcode =  await getLocalAdcode(clientIP)
        newUrl.searchParams.set('adcode', adcode)
        return NextResponse.redirect(newUrl)
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}