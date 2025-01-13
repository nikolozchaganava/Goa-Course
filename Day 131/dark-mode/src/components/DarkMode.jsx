import { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";
export default function DarkMode() {
  const [theme, setTheme] = useState(false);
  const handleDrkMode = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setTheme(true);
  };
  const handleLightMode = () => {
    document.documentElement.classList.remove("dark");
    setTheme(false);
  };
  return (
    <div className="relative cursor-pointer">
      {!theme && (
        <MdOutlineLightMode onClick={() => handleDrkMode()} className="absolute top-0" />
      )}
      {theme && (
        <FiMoon
          onClick={() => handleLightMode()}
          className="absolute top-0"
          color="#fff"
        />
      )}{" "}
    </div>
  );
}
