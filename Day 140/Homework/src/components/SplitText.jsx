import React from "react";

export default function SplitText({ children }) {
  const words = children.split("");
  return words.map((words, index) => (
    <span className="" key={index}>
      {words}
    </span>
  ));
}
