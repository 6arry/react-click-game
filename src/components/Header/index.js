import React from "react";
import "./header.css";

function Header(){
    return(
        <header className="header">
            <h1><strong>Hyperbolic Click Game!</strong></h1>
            <h2>Click on your opponents to gain power levels,</h2>
            <h2>but don't click on them any more than once!</h2>
            <h2>Test your memory skills</h2>
        </header>
    );
}

export default Header;