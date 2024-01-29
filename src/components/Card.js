import React from "react";
import "./Card.css";
function Card(props) {
    const combine ='card' + props.className;
  return <div className={combine}>{props.children}</div>;
}
export default Card;
