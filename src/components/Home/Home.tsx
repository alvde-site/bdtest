import clsx from "clsx";
import { useEffect, useRef, useState, type FC } from "react";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../Footer/Footer";

const Home: FC = () => {
  const [isHover, setIsHover] = useState(false);
  const header = useRef(null);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    if (!isHover) {
      tl.current.play();
    }
    if (isHover) {
      tl.current.pause(0);
    }
  }, [isHover]);

  useGSAP(() => {
    tl.current.to(header.current, {
      opacity: 0.2,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <>
      <header></header>
      <main>
        <section className={clsx(style.beans)}>
          <Link to="/beans">
            <h1
              className={clsx(style.beans__title)}
              ref={header}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Explore Beans ...
            </h1>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
