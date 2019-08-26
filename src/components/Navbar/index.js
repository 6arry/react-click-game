import React from "react";
import Power from "./Power.js"
import "./navbar.css";

function Navbar(){
    var score = 0;
    var topScore = 9000;
    return (
        <nav className="navbar">
            <ul><li class="brand"><a href="/">Hyperbolic Click Game</a></li>
            <li class="">Click an image to start training!</li>
            <li>Current Power Level: {score} | Highest Power Level: {topScore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;