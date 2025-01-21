//Dynamic route handler for comments
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(request: Request , {params}: {params: {id: string}}) {
     if(parseInt(params.id) > comments.length){
        return redirect("/comments");
     }
    const comment = comments.find((comment) => comment.id === parseInt(params.id));
     
        return Response.json(comment);
   
}

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    return Response.json(comments[index]);
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    
    //const body = await request.json();
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    const deletedComment = comments.splice(index, 1);
    return Response.json(deletedComment);
}



