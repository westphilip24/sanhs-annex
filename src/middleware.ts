import { edgeAuth } from "@/auth";
import { NextResponse } from "next/server";

export default edgeAuth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  // Protected routes
  const portalRoutes = ["/portal/dashboard", "/portal/grades", "/portal/attendance", "/portal/schedule", "/portal/announcements"];
  const adminRoutes = ["/admin"];

  const isPortalRoute = portalRoutes.some(r => pathname.startsWith(r));
  const isAdminRoute = adminRoutes.some(r => pathname.startsWith(r));

  if ((isPortalRoute || isAdminRoute) && !isLoggedIn) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && isLoggedIn) {
    const role = (req.auth?.user as any)?.role;
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/portal/dashboard", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/portal/:path*", "/admin/:path*"],
};
