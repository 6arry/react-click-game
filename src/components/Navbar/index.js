import React from "react";
import "./navbar.css";

function Navbar(props){
    return (
        <nav className="navbar">
            <ul><li class="brand"><a href="/">Hyperbolic Click Game</a></li>
            <li class="">Click an image to start training!</li>
            <li>Current Power Level: {props.power} | Highest Power Level: {props.highPower}</li>
            </ul>
        </nav>
    );
}

export default Navbar;