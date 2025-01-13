import React from "react";

export default function Navbar() {
  const links = [
    { name: "home", href: "#" },
    { name: "about", href: "#about" },
    { name: "contact", href: "#contact" },
  ];
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MyApp</h1>
        <ul className="flex w-fit space-x-7">
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-white text-lg capitalize">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
