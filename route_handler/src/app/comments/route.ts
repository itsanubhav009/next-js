import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) { //FOr sending data to the client
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    if (query) {
        const filteredComments = comments.filter((comment) => comment.text.includes(query));
        return Response.json(filteredComments);
    }
    
   
    return Response.json(comments);
}

export async function POST(request: Request) { //for receiving data from the client
    const comment = await request.json();
    const newcomment = { id: comments.length + 1, text: comment.text };
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment) , {
        headers: { "Content-Type": "application/json" },
        status: 201,
    });
}