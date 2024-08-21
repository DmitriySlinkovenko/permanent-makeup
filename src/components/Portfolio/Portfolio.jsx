import React from "react";
import p1 from "../../assets/p1.jpg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <img src={p1} alt="" className="portfolio__image" />
        <img src={p1} alt="" className="portfolio__image" />
        <img src={p1} alt="" className="portfolio__image" />
        <img src={p1} alt="" className="portfolio__image" />
        <img src={p1} alt="" className="portfolio__image" />
      </div>
    </section>
  );
}
