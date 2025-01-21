
import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) { //FOr sending data to the client
   const requestHeaders = new Headers(request.headers);
   const headerList = await headers();

   (await cookies()).set("result-page", "20");
    console.log(requestHeaders.get('authorization'));
   console.log(headerList.get('authorization'));
   const resultPageCookie = await cookies();
   console.log(resultPageCookie.get('result-page'));
    return new Response('<h1>Profile api data</h1>' , {
         headers: {
               'Content-Type': 'text/html',
               "Set-Cookie":"theme=dark",
         },
    });
 
 } 