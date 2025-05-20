import { useState } from "react";
import useTheme from "../../../core/hooks/HookTheme/useTheme";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";

const Themes = () => {
  const { mode, changeTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    // { key: "light", icon: <FaSun className="text-yellow-400" />, label: "Light" },
    { key: "dark", icon: <FaMoon className="text-gray-300" />, label: "Dark" },
    { key: "system", icon: <FaDesktop className="text-blue-400" />, label: "System" },
    { key: "purple", icon: <MdColorLens className="text-purple-500" />, label: "Purple" },
  ];

  const handleSelect = (themeKey) => {
    changeTheme(themeKey);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 m-2 bg-[var(--button-bg)] text-[var(--button-text)] rounded-full hover:scale-105 transition cursor-pointer"
      >
        <MdColorLens className="md:text-xl text-[12px]" />
      </button>

      {open && (
        <div 
        // className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800  focus:outline-none"
         className="absolute bottom-full mb-2 z-10 w-40 origin-bottom-right rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none">
          <ul className="py-1">
            {themes.map((theme) => (
              <li
                key={theme.key}
                onClick={() => handleSelect(theme.key)}
                className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  mode === theme.key ? "font-bold" : ""
                }`}
              >
                <span className="mr-2">{theme.icon}</span>
                {theme.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Themes;

