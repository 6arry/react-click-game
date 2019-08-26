import React from 'react';
import './herocard.css'

function HeroCard(props) {
    return (
      <div className="card" onClick={() => props.targetHit(props.value)}>
        <div className="img-container">
          <img className="click-img" alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }

export default HeroCard;