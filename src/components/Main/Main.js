import React from 'react';
import './main.css';

function Main(props){
    return <div className="container">{props.children}</div>;
}

export default Main;