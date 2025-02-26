import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headerList = await headers();
  const theme=request.cookies.get("theme")
  console.log(theme)

  const cookieStore=await cookies()
  cookieStore.set("resultsPerPage","20")
  console.log(cookieStore.get("resultsPerPage"))
  console.log(headerList.get("Authorization"));
  return new Response("Profile API Data", {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark",
    },
  });
}
