import { useEffect, useState } from "react";
import style from "./style/TeamStyle.module.scss";

function Team() {
  const [showMotion, setShowMotion] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  });

  useEffect(() => {
    const zoomIn = () => {
      if (window.scrollY > 1000) {
        setShowMotion(true);
      } else {
        setShowMotion(false);
      }
    };
    window.addEventListener("scroll", zoomIn);

    return () => {
      window.removeEventListener("scroll", zoomIn);
    };
  }, []);

  return (
    <div className={style.teamSection}>
      <div className={showMotion ? style.member : ""}>
        <h2>Person 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero, quas iusto ratione maxime asperiores.
        </p>
      </div>
      <div className={showMotion ? style.member : ""}>
        <h2>Person 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero, quas iusto ratione maxime asperiores.
        </p>
      </div>
      <div className={showMotion ? style.member : ""}>
        <h2>Person 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero, quas iusto ratione maxime asperiores.
        </p>
      </div>
    </div>
  );
}

export default Team;
