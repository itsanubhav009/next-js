import { Metadata } from "next";


export const metadata:Metadata = {
    title: {
        
        default: "Routing Demo",
        template: "%s | demo",
    },
    description: " by next.js",
  
};
export default function Layout(
    {
        children,
    }:
    {
        children: React.ReactNode;
    }){
    return (
           <html>
           
            <body>
                <header
                    style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "10px",
                        textAlign: "center",
                    }}
                 >
                    <h1>Header</h1>
                </header>
                {children}
                <footer style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
                    <h1>Footer</h1>
                </footer>
                </body>
                </html>
    );
    }