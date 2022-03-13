import clsx from "clsx";
import { useEffect, useState } from "react";
import style from "./style/TitleStyle.module.scss";

function Title() {
  const [showMotion, setShowMotion] = useState(true);

  useEffect(() => {
    const floatIn = () => {
      if (window.scrollY >= 400 && window.scrollY < 1100) {
        setShowMotion(true);
      } else {
        setShowMotion(false);
      }
    };
    window.addEventListener("scroll", floatIn);
    return () => {
      window.removeEventListener("scroll", floatIn);
    };
  }, []);

  const classesLeft = clsx(
    style.boxElement,
    showMotion ? style.left2Right : ""
  );
  const classRight = clsx(style.boxElement, showMotion ? style.right2Left : "");

  return (
    <div className={style.titleSection}>
      <div className={classesLeft}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est
          debitis ratione, animi fugit quam quasi, officia ullam veritatis esse
          voluptatibus dolores autem explicabo, facere eos qui. Ipsum, dolor
          expedita.
        </p>
      </div>
      <div className={classRight}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est
          debitis ratione, animi fugit quam quasi, officia ullam veritatis esse
          voluptatibus dolores autem explicabo, facere eos qui. Ipsum, dolor
          expedita.
        </p>
      </div>
    </div>
  );
}

export default Title;
