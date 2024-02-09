import { useState } from "react"
import "./App.css"
import keyMap from "./assets/dictionary.json"

function App() {
  const [input, setInput] = useState("")
  const [outputIndex, setOutputIndex] = useState(0)
  const [previousText, setPreviousText] = useState("")

  let outputArray = []
  let currentWord = ""
  let output = ""

  if (input !== "") {
    outputArray = keyMap[input]
  }

  if (outputArray !== undefined) {
    currentWord = outputArray[outputIndex]
  } else {
    currentWord = input
  }

  output = previousText + " " + (currentWord ? currentWord : "")

  const onSpaceClick = () => {
    setPreviousText(previousText + " " + currentWord)
    setOutputIndex(0)
    setInput("")
  }

  const onHashClick = () => {
    if (outputIndex < outputArray.length - 1) {
      setOutputIndex((outputIndex) => outputIndex + 1)
    } else {
      setOutputIndex(0)
    }
  }

  return (
    <>
      <div className="T9Keyboard">
        <div className="T9Keyboard__output">
          <p>{output}</p>
        </div>
        <div className="T9Keyboard__input">
          <div className="T9Keyboard__input-row">
            <button role="button">
              <span className="T9Keyboard__input-button-number">1</span>
              <span className="T9Keyboard__input-button-alphabets"></span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "2")}
            >
              <span className="T9Keyboard__input-button-number">2</span>
              <span className="T9Keyboard__input-button-alphabets">ABC</span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "3")}
            >
              <span className="T9Keyboard__input-button-number">3</span>
              <span className="T9Keyboard__input-button-alphabets">DEF</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button
              role="button"
              onClick={() => setInput((input) => input + "4")}
            >
              <span className="T9Keyboard__input-button-number">4</span>
              <span className="T9Keyboard__input-button-alphabets">GHI</span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "5")}
            >
              <span className="T9Keyboard__input-button-number">5</span>
              <span className="T9Keyboard__input-button-alphabets">JKL</span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "6")}
            >
              <span className="T9Keyboard__input-button-number">6</span>
              <span className="T9Keyboard__input-button-alphabets">MNO</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button
              role="button"
              onClick={() => setInput((input) => input + "7")}
            >
              <span className="T9Keyboard__input-button-number">7</span>
              <span className="T9Keyboard__input-button-alphabets">PQRS</span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "8")}
            >
              <span className="T9Keyboard__input-button-number">8</span>
              <span className="T9Keyboard__input-button-alphabets">TUV</span>
            </button>
            <button
              role="button"
              onClick={() => setInput((input) => input + "9")}
            >
              <span className="T9Keyboard__input-button-number">9</span>
              <span className="T9Keyboard__input-button-alphabets">WXYZ</span>
            </button>
          </div>
          <div className="T9Keyboard__input-row">
            <button
              role="button"
              onClick={() =>
                setInput((input) => input.substring(0, input.length - 1))
              }
            >
              <span className="T9Keyboard__input-button-number">*</span>
              <span className="T9Keyboard__input-button-alphabets">
                Delete
              </span>
            </button>
            <button
              role="button"
              onClick={onSpaceClick}
            >
              <span className="T9Keyboard__input-button-number">0</span>
              <span className="T9Keyboard__input-button-alphabets">Space</span>
            </button>
            <button
              role="button"
              onClick={onHashClick}
            >
              <span className="T9Keyboard__input-button-number">#</span>
              <span className="T9Keyboard__input-button-alphabets">Shift</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
