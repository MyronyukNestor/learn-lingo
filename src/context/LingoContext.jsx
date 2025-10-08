import { createContext, useEffect, useState } from "react";

export const LingoContext = createContext();

const LingoContextProvider = (props) => {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const ContextValue = {
    changeTheme,
    theme,
  };

  return (
    <LingoContext.Provider value={ContextValue}>
      {props.children}
    </LingoContext.Provider>
  );
};

export default LingoContextProvider;
