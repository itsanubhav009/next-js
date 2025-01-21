export const dynamic = "force-dynamic";

export async function GET(){
    
    


    // This is cached
    return Response.json({
        time: new Date().toLocaleTimeString(),
    });
}