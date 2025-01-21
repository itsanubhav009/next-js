'use client'
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    
       
        const handleClick = () => {
         
            console.log("PLacing your order");
            router.push("/");
        
    };
    return (
        <>
        <h1>Welcome to order product page!</h1>
        <button onClick={handleClick}>Order</button>
        </>
    );
}
