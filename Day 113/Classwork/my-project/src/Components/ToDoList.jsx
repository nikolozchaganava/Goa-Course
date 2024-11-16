import React, { useState } from "react";
import Button from "./Button";

export default function TodoList() {
  const [todo, setTodo] = useState([
    "temo velijaanashvili",
    "shio elikasvhil",
    "dachijananashvili",
  ]);

  const handleTodoAdd = (index) => {
    setTodo([...todo, `davit meparishvili`]);
  };
  const handleRemove = (index) => {
    const copyArray = [...todo];
    const filterCopyArray = copyArray.filter((_, copyIndex) => {
      console.log("todo idnex", index, "filter index", copyIndex);
      return copyIndex !== index;
    });
    console.log(filterCopyArray);
    setTodo(filterCopyArray);
  };
  return (
    <div>
      <div className="border border-black/30 p-4 rounded-sm">
        <h2></h2>
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="max-h-[300px]">
            {todo.map((item, index) => (
              <div key={index} className="mx-4 flex gap-2 items-center">
                <p className="m-4">{item}</p>
                <div onClick={() => handleRemove(index)}>
                  <Button variant={"black"}>remove</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-5 " />
        <div className="flex gap-2">
          <div onClick={() => handleTodoAdd()}>
            <Button variant={"black"}>add</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
