import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "~!@#$%^&*()_+}{";
    if (numbersAllowed) str += "0123456789";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [numbersAllowed, charAllowed, length]);
  useEffect(() => {
    passwordGenerator();
  }, [numbersAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);
  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={() => {
              passwordRef.current?.select();
              window.navigator.clipboard.writeText(password);
            }}
          >
            Copy
          </button>
        </div>
        <div className="dependency">
          <div className="length">
            <input
              type="range"
              id="length"
              min={4}
              max={30}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: ({length})</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              id="numbers"
              defaultChecked={numbersAllowed}
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="characters">
            <input
              type="checkbox"
              id="characters"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
