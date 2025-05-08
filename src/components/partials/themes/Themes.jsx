import useTheme from "../../../core/hooks/HookTheme/useTheme";

const Themes = () => {
  const {mode,changeTheme} = useTheme()
  // const changeTheme = (newTheme) => {
  //   console.log('newTheme=====>',newTheme)
  // }

  return (
    <div
      className="bg-[var(--bg-main)] text-[var(--text-main)]"
    >
      <button
        onClick={() => changeTheme("light")}
        className="p-2 m-2 bg-[var(--button-bg)] text-[var(--button-text)] rounded-full"
      >
        light theme
      </button>
      <button
        onClick={() => changeTheme("dark")}
        className="p-2 m-2 bg-[var(--button-bg)] text-[var(--button-text)] rounded-full"
      >
        dark theme
      </button>
      <button
        onClick={() => changeTheme("system")}
        className="p-2 m-2 bg-[var(--button-bg)] text-[var(--button-text)] rounded-full"
      >
        system theme
      </button>
    </div>
  );
};

export default Themes;