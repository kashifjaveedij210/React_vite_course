import React, { useEffect, useState } from "react";

import { ThemeProvide } from "./context/Theme";
import { ThemeButton } from "./ThemeButton";
import Card from "./Card";

export default function MainPage() {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    
    <ThemeProvide value={{ themeMode, darkMode, lightMode }}>
      <div style={{backgroundColor:themeMode}}>
        {console.log(themeMode)}
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              < Card/>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvide>
  );
}
