import React from 'react';
import './herocard.css'

function HeroCard(props) {
    return (
      <div className="card">
        <div className="img-container">
        <span onClick={() => props.targetHit(props.value)} className="hit">
          <img className="click-img" alt={props.name} src={props.image} />
        </span>
        </div>
      </div>
    );
  }

export default HeroCard;