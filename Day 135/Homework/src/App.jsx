import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    gsap.to("h1", {
      duration: 1,
      x: 250,
      yoyo: true,
      ease: "power4.inOut",
      repeat: -1
    });
  }, []);
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#1A1B1E]">
      <h1 className="text-9xl text-slate-50 relative right-[100px]">Hello World!</h1>
    </div>
  );
}
