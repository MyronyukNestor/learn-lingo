import { createContext, useEffect, useState } from "react";

import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

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

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const teachersRef = ref(database, "/");
    onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const teachersList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTeachers(teachersList);
      }
    });
  }, []);

  const [favorite, setFavorite] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("favorite"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorite = (teacher) => {
    setFavorite((prev) =>
      prev.find((t) => t.id === teacher.id)
        ? prev.filter((t) => t.id !== teacher.id)
        : [teacher, ...prev]
    );
  };

  const ContextValue = {
    changeTheme,
    theme,
    teachers,
    favorite,
    addToFavorite,
  };

  return (
    <LingoContext.Provider value={ContextValue}>
      {props.children}
    </LingoContext.Provider>
  );
};

export default LingoContextProvider;
