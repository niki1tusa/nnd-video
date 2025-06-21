import { NextResponse } from "next/server";

export function nextRedirect(toUrl: string | URL, currentURL: string | URL){
    return NextResponse.redirect(new URL(toUrl, currentURL))
}