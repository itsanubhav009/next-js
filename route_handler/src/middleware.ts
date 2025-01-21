import {NextResponse , type NextRequest} from "next/server";

export function middleware(request: NextRequest) {

    const response = NextResponse.next();
    // if (request.url === "/profile") {
        
    
    // return NextResponse.redirect(new URL("/" , request.url));

    // }

}

// export const config = {
//     matcher: "/profile",
// };