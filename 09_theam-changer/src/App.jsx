import { useState, useEffect } from "react";
import "./App.css";
import { TheamContextProvider } from "./contexts/Theam";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Cards";

function App() {
  const [themeMode, setTheme] = useState("light");
  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };

  // Actual changes in a Theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <TheamContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamContextProvider>
  );
}

export default App;
