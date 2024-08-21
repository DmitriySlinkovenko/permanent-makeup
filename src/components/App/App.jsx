import { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Card from "../Card/Card";
import { useTransform, useScroll, motion } from "framer-motion";
import bg2 from "../../assets/b2.jpeg";
import bg3 from "../../assets/b3.png";
import bg4 from "../../assets/b4.jpeg";
import bg5 from "../../assets/b5.jpeg";
import o1 from "../../assets/o1.png";
import Portfolio from "../Portfolio/Portfolio";

import "./App.css";

function App() {
  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-81%"]);

    return (
      <section ref={targetRef} className="h-scroll" id="about">
        <div className="h-scroll-1">
          <motion.div style={{ x }} className="h-scroll-2">
            <Card
              bg={bg2}
              text={"Permanent makeup wqehqwehuiwqeiqweiuqwheiuqwe"}
              olya={o1}
            />
            <Card
              bg={bg2}
              text={"Permanent makeup wqehqwehuiwqeiqweiuqwheiuqwe"}
              olya={o1}
            />
            <Card
              bg={bg3}
              text={"Permanent makeup wqehqwehuiwqeiqweiuqwheiuqwe"}
              olya={o1}
            />
            <Card
              bg={bg4}
              text={"Permanent makeup wqehqwehuiwqeiqweiuqwheiuqwe"}
              olya={o1}
            />
            <Card
              bg={bg5}
              text={"Permanent makeup wqehqwehuiwqeiqweiuqwheiuqwe"}
              olya={o1}
            />
          </motion.div>
        </div>
      </section>
    );
  };

  const parallaxMovement = () => {
    const parEl = document.querySelectorAll(".parallax");

    let axisX = 0,
      axisY = 0;

    window.addEventListener("mousemove", (e) => {
      axisX = e.clientX - window.innerWidth / 2;
      axisY = e.clientY - window.innerHeight / 2;

      parEl.forEach((el) => {
        let speedX = el.dataset.speedx;
        let speedY = el.dataset.speedy;
        el.style.transform = `translateX(calc(${
          -axisX * speedX
        }px)) translateY(calc(${axisY * speedY}px))`;
      });
    });
  };

  setTimeout(
    useEffect(() => {
      parallaxMovement();
    }, []),
    1000
  );
  return (
    <>
      <Header />
      <Main />
      <HorizontalScrollCarousel />
      <Portfolio />
    </>
  );
}

export default App;
