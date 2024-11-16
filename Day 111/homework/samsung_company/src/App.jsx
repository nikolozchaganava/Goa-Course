import { useState } from "react";
import Image from "./assets/samsung.png";
function App() {
  return (
    <div className="h-screen p-40 bg-slate-50">
      <div className="flex gap-20 bg-white p-20 py-32 rounded-lg justify-between">
        <div className="flex flex-col gap-20">
          <h1 className="relative font-bold text-6xl heading-after">
            Samsung Galaxy S25 Ultra
          </h1>
          <p className="w-[40rem] text-2xl">
            Samsung S25 Ultra is here with 20% discount! Take stunning photos
            with 64mb camera and record 8k resolution, 240fps videos! Improved
            storage(1,024Tb), zoom, AI assistant and so much more.(full details
            on{" "}
            <a href="#" className="italic">
              samsung company
            </a>
            )
          </p>
          <button className="relative overflow-hidden w-[45%] p-4 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-3xl">
            <span className="relative z-10 font-bold text-3xl">
              Click to buy
            </span>
            <span className="absolute inset-0 bg-gradient-to-l from-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
          </button>
        </div>
        <img src={Image} alt="" className="float-right w-fit" />
      </div>
    </div>
  );
}

export default App;
