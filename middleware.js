import { NextResponse } from "next/server";

function middleware(request) {
  if (request.nextUrl.pathname.includes("/")) {
    console.log("validating Home");
  }
  return NextResponse.next();
}

export default middleware;
