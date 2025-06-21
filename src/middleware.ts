import type { NextRequest } from "next/server";
import { STUDIO_PAGE } from "./config/studio-page.config";
import { protectStudio } from "./server-actions/middleware/protect-studio";
import { PAGE } from "./config/public-page.config";
import { protectLoginPages } from "./server-actions/middleware/protect-auth";
// middleware используется на стороне сервера
export async function middleware(request: NextRequest){
const url = new URL(request.url)
const pathname = url.pathname

if(pathname.includes(STUDIO_PAGE.HOME)){
    return protectStudio(request)
}
if(pathname.includes(PAGE.AUTH)){
    return protectLoginPages(request)
}
}

export const config = {
    matcher: [
        '/studio/:path*',
        '/auth/:path*'
    ]
}