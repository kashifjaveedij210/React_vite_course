import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setaAllowChar] = useState(false);
const passwordRef= useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "@#$%&*";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowChar, allowNumber]);

  useEffect(() => {
    generatePassword();
  }, [length, allowChar, allowNumber]);

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    // passwordRef.current.select()
    alert('password copied')
  }

  return (
    <div style={{ backgroundColor: "gray", width: "100vw", height: "100vh" }}>
      Password Generator
      <div>
        <input
          type="text"
          defaultValue={password}
          onChange={() => setPassword((prev) => !prev)}
          ref={passwordRef}
        />
        <button onClick={copyPassword}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          value={length}
          defaultChecked={length}
          min={8}
          max={20}
          onChange={(e) => setLength(e.target.value)}
          name=""
          id=""

        />
        <label htmlFor="Length">Length</label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          id="checkChar"
          defaultChecked={allowChar}
          onChange={() => setaAllowChar((prev) => !prev)}
        />
        <label htmlFor="char">Allow Character</label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          id="checkNumber"
          defaultChecked={allowNumber}
          onChange={() => setAllowNumber((prev) => !prev)}
        />
        <label htmlFor="number">Allow Number</label>
      </div>
    </div>
  );
};

export default PasswordGenerator;
