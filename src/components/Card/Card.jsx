import React from "react";
import "./Card.css";

export default function Card({ bg, text, olya }) {
  return (
    <div className="card">
      <img src={bg} alt="Portfolio Image" className="card__image" />
      <img src={olya} alt="" className="olya" />
      <p className="card__text">{text}</p>
    </div>
  );
}
