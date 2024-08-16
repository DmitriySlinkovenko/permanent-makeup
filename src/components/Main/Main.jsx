import React from "react";
import "./Main.css";
import o1 from "../../assets/o1.png";
import b1 from "../../assets/b1.jpg";

export default function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <img
          src={b1}
          alt=""
          data-speedx="0.03"
          data-speedy="0.03"
          className="parallax__img parallax"
        />
        <p
          data-speedx="0.01"
          data-speedy="0.01"
          className="popup__text parallax"
        >
          Hi, my name is Olya, let me take you on a thrilling journey about
          Permanent Makeup!
        </p>
        <img
          src={o1}
          data-speedx="0.01"
          data-speedy="0.01"
          alt=""
          className="main__popup parallax"
        />
      </div>
    </main>
  );
}
