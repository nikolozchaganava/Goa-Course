import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import laptop from "./assets/laptop.webp"
import cpu from './assets/cpu.png'

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const laptopRef = useRef(null);
  const cpuRef = useRef(null);
  const laptopTl = gsap.timeline();
  const cpuTl = gsap.timeline();

  useEffect(() => {
    //! Box animation 1
    gsap.to(boxRef.current, {
      duration: 1,
      x: "50vw",
      yoyo: true,
      repeat: 1,
      ease: "power4.inOut",
    });

    //! Box animation 2
    gsap.to(boxRef.current, {
      y: "50vh",
      yPercent: -50,
      rotate: 360,
      duration: 1,
    });

    //! Box animation 3
    gsap.to(boxRef.current, {
      width: "100vw",
      height: "100vh",
      duration: 0.2,
      scale: 1,
    });

    //! Text animation
    gsap.to(textRef.current, {
      opacity: 1,
      repeat: 0,
      duration: 1,
    });
    
    //! Laptop animation 1
    laptopTl.to(laptopRef.current, {
      y: "-15vh",
      x: "-55%",
      rotate: -25,
      duration: 1,
      ease: "power4.inOut",
      opacity: 1,
    });
    
    //! laptop animation 2
    laptopTl.to(laptopRef.current, {
      y: "15vh",
      x: "55%",
      rotate: 25,
      duration: 1,
      ease: "power4.inOut",
      opacity: 1,
    }).yoyo(true).repeat(-1);
    
    //! CPU animation 1
    cpuTl.to(cpuRef.current, {
      y: "15vh",
      x: "55%",
      rotate: 25,
      duration: 1,
      ease: "power4.inOut",
      opacity: 1,
    });
    
    //! CPU animation 2
    cpuTl.to(cpuRef.current, {
      y: "-15vh",
      x: "-55%",
      rotate: -25,
      duration: 1,
      ease: "power4.inOut",
      opacity: 1,
    }).yoyo(true).repeat(-1);
  }, []);
  return (
    <>
      <div ref={boxRef} className="bg-black size-50 overflow-hidden z-[-1]"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-fit">
        <img ref={laptopRef} src={laptop} alt="" className="opacity-0 z-1"/>
        <img ref={cpuRef} src={cpu} alt="" className="opacity-0 z-1 scale-[.9]"/>
        <div
          ref={textRef}
          className="opacity-0 text-9xl font-poppins text-white text-center z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          Group 6
        </div>
      </div>
    </>
  );
}