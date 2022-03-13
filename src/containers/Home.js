import style from "./style/HomeStyle.module.scss";
import { useEffect, useState } from "react";
function Home() {
  const [showMotion, setShowMotion] = useState(true);

  useEffect(() => {
    const floatIn = () => {
      if (window.scrollY < 400 && window.scrollY >= 0) {
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

  return (
    <div className={style.homeSection}>
      <h1 className={showMotion ? style.floatInDelay : ""}>TranDongUT</h1>
      <p className={showMotion ? style.floatIn : ""}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ad quidem
        ab incidunt dolorum deserunt optio eum ipsam quod
      </p>
    </div>
  );
}
export default Home;
