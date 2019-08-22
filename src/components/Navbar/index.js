import React from "react";
import "./navbar.css";

function Navbar() {
    return (
    <nav className="navbar">
        <ul><li class="brand"><a href="/">Hyperbolic Click Game</a></li>
        <li class="">Click an image to start training!</li>
        <li>Score: 0 | Top Score: 12</li>
        </ul>
  </nav>
    )
}

export default Navbar