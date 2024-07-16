import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const selectPage = "/feature/select";
const authPage = ["/register", "/contactUs"];
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("Token")?.value;
  if (request.nextUrl.pathname.startsWith(selectPage) && !token) {
    return NextResponse.redirect(new URL("/contactUs", request.url));
  }
  if (
    authPage.some((path) => request.nextUrl.pathname.startsWith(path)) &&
    token
  ) {
    return NextResponse.redirect(new URL(selectPage, request.url));
  }
  return NextResponse.next();
}
//  features to be authenticated
export const config = {
  matcher: ["/feature/select", "/register", "/contactUs"],
};
