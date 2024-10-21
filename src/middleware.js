import { NextResponse } from "next/server";

export function middleware(request){
   // if(request.nextUrl.pathname!="/Login"){
    return NextResponse.redirect(new URL("/Login",request.url))
   // }
}

export const config={
    matcher:["/About/:path*", "/studentlist/:path*"]
}