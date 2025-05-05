import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemLocalStorage } from "../local-storage/getItemLocalStorage";
import { setMode } from "../../../redux/actions";
import { setItemLocalStorage } from "../local-storage/setItemLocalstorage";

const useTheme = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const changeTheme = (newTheme) => {
    console.log("Changing theme to:", newTheme);
    dispatch(setMode(newTheme));
    setItemLocalStorage("theme", newTheme);
  };

  useEffect(() => {
    const userTheme = getItemLocalStorage("theme") || "system";
    console.log("Initial theme from localStorage:", userTheme);
    dispatch(setMode(userTheme));
  }, [dispatch]);
  useEffect(() => {
    console.log("Current mode in useEffect:", mode);
    const applyTheme = (themeName) => {
      document.documentElement.classList.remove("dark-theme");
      if (themeName === "dark") {
        console.log("themeNameIsDark");
        document.documentElement.classList.add("dark-theme");
      }
    };

    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    const hour = new Date().getHours();
    const isNight = hour >= 20 || hour <= 6;

    if (mode === "system") {
      if (isNight) {
        applyTheme("dark");
      } else {
        applyTheme(systemTheme);
      }
    } else {
      applyTheme(mode);
    }
  }, [mode]);

  return { mode, changeTheme };
};

export default useTheme;
