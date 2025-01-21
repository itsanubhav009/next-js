'use client';
// import { Metadata } from "next";
// type Props = {
//     params: {
//         productId: string;
//         reviewId: string;
//     };
// };

// export const generateMetadata =async ({ params }:   Props):
//  Promise <Metadata> => {
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Review ${params.reviewId} for Product ${params.productId}`)
//             }, 100);
//  });
    
//     return {
//          title : `Product ${title}`,
//     };
// } ;

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}



export default function Productid({params }:
   Props
 )
 {
    const random = getRandomInt(2);


if(random === 1)
{
    throw new Error("Random error");
}
     return <h1>Welcome to review {params.reviewId}  Product{params.productId}!</h1>;
 }