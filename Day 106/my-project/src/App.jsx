import React from "react";
import Colors from './Colors';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-700">
      {Colors.map((color, index) => (
        <div
          key={index}
          className={`${color} w-[20rem] h-[10rem] rounded-lg flex items-center justify-center text-white font-bold text-[2.5rem]`}
        >
          {color.replace('bg-', '').replace('-500', '').toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default App;
