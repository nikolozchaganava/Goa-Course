import React, { useEffect } from "react";
import gsap from "gsap";

const App = () => {
  useEffect(() => {
    const div = document.getElementById("div1");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      gsap.to(div, {
        rotation: scrollPosition * 0.1,
        ease: "none",
      });

      const colorValue = Math.min(255, scrollPosition / 2);
      div.style.backgroundColor = `rgb(${colorValue}, 100, 255)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[2000px]">
      <div
        id="div1"
        className="w-56 h-56 bg-black m-10 fixed"
        style={{ top: "20vh" }}
      >
        <p>Scroll to Spin and Change Color</p>
      </div>
    </div>
  );
};

export default App;