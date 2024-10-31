import React from "react";
import { Button } from "@headlessui/react";

const Todo = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-slate-50">
      <div className="bg-gray-200 h-[60%] w-[25%] rounded-xl flex flex-col items-center p-10 gap-5">
        <h1 className="text-5xl font-semibold">Todo</h1>
        <form className="bg-gray-50 rounded-xl w-full flex justify-between">
            <input type="text" id="" className={`h-full w-full bg-transparent text-2xl p-3 focus:outline-none`}/>
          <Button
            type='button' className={"bg-orange-400 p-5 text-2xl text-white font-bold rounded-xl hover:bg-orange-500 duration-500"}>
            Add
          </Button>
        </form>
        <h2 className="text-4xl font-semibold">Lists:</h2>
      </div>
    </div>
  );
};

export default Todo;
