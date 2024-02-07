import { useState } from "react"
import "./App.css"
import keyMap from "./assets/dictionary.json"

function App() {
  const [input, setInput] = useState("")
  const output = keyMap[input]
  return (
    <>
      <div className="T9Keyboard">
        <div className="T9Keyboard__output">
          <input
            // value={output}
            type="text"
          />
        </div>
        <div className="T9Keyboard__input">
          <div className="T9Keyboard__input-row">
            <button role="button">
              <span className="T9Keyboard__input-button-number">1</span>
              <span className="T9Keyboard__input-button-alphabets"></span>
            </button>
            <button
              role="button"
              onClick={() => setInput(input + "2")}
            >
              <span className="T9Keyboard__input-button-number">2</span>
              <span className="T9Keyboard__input-button-alphabets">ABC</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">3</span>
              <span className="T9Keyboard__input-button-alphabets">DEF</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button role="button">
              <span className="T9Keyboard__input-button-number">4</span>
              <span className="T9Keyboard__input-button-alphabets">GHI</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">5</span>
              <span className="T9Keyboard__input-button-alphabets">JKL</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">6</span>
              <span className="T9Keyboard__input-button-alphabets">MNO</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button role="button">
              <span className="T9Keyboard__input-button-number">7</span>
              <span className="T9Keyboard__input-button-alphabets">PQRS</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">8</span>
              <span className="T9Keyboard__input-button-alphabets">TUV</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">9</span>
              <span className="T9Keyboard__input-button-alphabets">WXYZ</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button role="button">
              <span className="T9Keyboard__input-button-number">*</span>
              <span className="T9Keyboard__input-button-alphabets"></span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">0</span>
              <span className="T9Keyboard__input-button-alphabets">␣</span>
            </button>
            <button role="button">
              <span className="T9Keyboard__input-button-number">#</span>
              <span className="T9Keyboard__input-button-alphabets"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
