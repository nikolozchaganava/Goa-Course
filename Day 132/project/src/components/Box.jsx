import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Box() {
  useEffect(() => {
    gsap.from('.box', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from('.box h1', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      className="box w-64 h-64 bg-green-200 rounded p-5 flex justify-center items-center gap-2"
    >
      <h1 className="text-2xl text-gray-700 font-semibold">Hello</h1>
      <h1 className="text-2xl text-gray-700 font-semibold">World</h1>
      <h1 className="text-2xl text-gray-700 font-semibold">!</h1>
    </div>
  );
}
