import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  const user = process.env.BASIC_AUTH_USER || "admin";
  const pass = process.env.BASIC_AUTH_PASS || "changeme";
  if (!authHeader?.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic realm=\"Secure Area\"" },
    });
  }
  const base64 = authHeader.split(" ")[1] || "";
  // Edge runtime-safe base64 decode
  let decoded = "";
  try {
    decoded = atob(base64);
  } catch {
    return new NextResponse("Bad auth header", { status: 400 });
  }
  const [u, p] = decoded.split(":");
  if (u === user && p === pass) return NextResponse.next();
  return new NextResponse("Unauthorized", { status: 401 });
}

export const config = {
  matcher: ["/admin/:path*"],
};


