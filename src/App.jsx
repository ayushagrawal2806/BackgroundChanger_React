import { useState } from "react";
let changeColor = () => {
    let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let str = "";
    for(let i = 0;i<6;i++){
        str = str + arr[ Math.floor(Math.random() * 16)];
    }
    return str;
}
let App = () => {
    let [color , setColor] = useState("");
    let [hColor , setHColor] = useState("");
    let main = {
        minHeight : "100vh",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : (color || "black"),
        overflowX : "hidden"
    }

    let h1 = {
        color : (hColor || "white"),
        fontSize : "4rem",
        marginTop : "2rem",
        fontStyle : "italic",
        textDecoration : "underline",
        textAlign : "center"
    }

    let h2 = {
        color : (hColor || "white"),
        fontSize : "1.8rem",
        marginTop : "12rem",
        textAlign : "center" 
    }

    let button = {
        marginTop : "12rem",
        fontSize : "1.5rem",
        padding : "0.5rem 1rem",
        borderRadius : "5rem",
        backgroundColor : (hColor || "white"),
        border : "none",
        fontWeight : "700",
        cursor : "pointer",
        color : (color || "black")
    }

    return (
        <main style={main}>
            <h1 style={h1}>Background Color Changer</h1>

            <h2 style={h2}>Background Color Code is :{(color || "#000000")}</h2>

            <button style = {button} onClick={() => {
                let str = "#" + changeColor();
                setColor(str);
                let str1 = "#" + changeColor();
                setHColor(str1);
            }}>Change</button>

        </main>
    )
}

export default App;