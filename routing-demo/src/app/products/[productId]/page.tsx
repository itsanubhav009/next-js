export default function Productid({params , }:
   { params : {productId: string};}
)
{
    return <h1>Welcome to  Product{params.productId}!</h1>;
}