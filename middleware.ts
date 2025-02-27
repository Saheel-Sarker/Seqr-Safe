import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);
  const session = await auth0.getSession(request);

  if (request.nextUrl.pathname.startsWith("/dashboard") && !session) {
    // user is not authenticated, redirect to login page
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl.origin));
  }

  if (request.nextUrl.pathname === "/" && session) {
    // authenticated user trying to access the landing page, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }

  // Allow access to other routes like /pricing for all users
  return authRes;
}