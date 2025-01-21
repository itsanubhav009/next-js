import React from "react";

const Card = ({children}:{children: React.ReactNode})=>{
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        border: "1px solid #ddd"
        ,display:"flex",
        jusifyContent:"center",
        alignItems:"center",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    }
return <div style={cardStyle}>{children}</div>
};
export default Card;