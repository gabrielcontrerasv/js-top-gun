import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const middleware = async (request) => {
  const jwt = request.cookies.get("myToken");

  // if (request.nextUrl.pathname.includes("/welcome")) {
  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (jwt) return NextResponse.next();
  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));
  // try {
  //   const { payload } = await jwtVerify(
  //     jwt,
  //     new TextEncoder().encode("secret")
  //   );
  //   if (jwt) return NextResponse.next();
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // }
  // return NextResponse.next();
};

export const config = {
  matcher: ["/welcome", "/users/:path*", "/petProfile/:path*  "],
};

export default middleware;
