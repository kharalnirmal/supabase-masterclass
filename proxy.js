import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { createClient } from "./lib/supabase/server";
export async function proxy(request) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  const supabase = await createClient();
  //   comming from supabaser serves file
  await supabase.auth.getUser();
  //   getUser() is called purely for its side effect: it forces Supabase to verify the token with its server and refresh it if expired. Without calling some auth method here, nothing would ever trigger the check — all the cookie-wiring code would sit there unused.
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
};
