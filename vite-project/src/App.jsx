import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BgChanger from "./Components/BgChanger";
import PasswordGenerator from "./Components/PasswordGenerator";
import CurrencyConverter from "./Components/Currencyconverter/CurrenyConverter";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Login from "./Components/Interview/Login";
import Planet from "./Components/Interview/Planet";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BgChanger /> */}
      {/* <PasswordGenerator/> */}
      {/* <CurrencyConverter/>
       */}
       <div className='container'>
      <h1>Star Wars</h1>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />}/>
        
      <Route path='/planet' element={<Planet />}/>
       
      </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Planet/> */}
    </div>
    </>
  );
}

export default App;
