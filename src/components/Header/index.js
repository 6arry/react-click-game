import React from "react";
import "./header.css";

function Header(){
    return(
        <header className="header">
            <h1>Hyperbolic Click Game!</h1>
            <h2>Click on your opponents to earn points, but don't click on them any more than once!</h2>
            <h2>Test your memory skills</h2>
        </header>
    );
}

export default Header;