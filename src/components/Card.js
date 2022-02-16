import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.photo} alt='foto perfil'></img>
      <h3>{props.firstName} {props.lastName}</h3>
    </div>
  )
}

export default Card;
