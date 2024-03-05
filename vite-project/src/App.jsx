import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BgChanger from "./Components/BgChanger";
import PasswordGenerator from "./Components/PasswordGenerator";
import CurrencyConverter from "./Components/Currencyconverter/CurrenyConverter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./ThemeSwitcher/Card";
import MainPage from "./ThemeSwitcher/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BgChanger /> */}
      {/* <PasswordGenerator/> */}
      {/* <CurrencyConverter/>
       */}
      <MainPage />
    </>
  );
}

export default App;
