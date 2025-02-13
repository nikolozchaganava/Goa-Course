import React, { Children, useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
    gsap.to(
      ".text",
      {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        stagger: .5
      }
    );
  }, []);

  const SplitText = ({ children }) => {
    const words = children.split("");

    return words.map((word, index) => (
      <span key={index}>
        {word}
      </span>
    ));
  }

  return (
    <div className="grid place-content-center min-h-screen">
      <h1 className="text-lg font-poppins text opacity-0">
        <SplitText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, aliquid. Cumque beatae sunt fugit dolorum at, ipsum fuga provident nulla distinctio obcaecati? Quia delectus consequuntur voluptatum. Veniam, repellendus. Eum, a.
        </SplitText>
      </h1>
    </div>
  );
}