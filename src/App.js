import React, {useState} from "react"
import {customAlphabet} from "nanoid"

let NUMBERS = "0123456789"
let LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
let UPPERCASE = LOWERCASE.toUpperCase()
let SYMBOLS = "_-"

export default function App() {
  let [withLength, setWithLength] = useState(8)
  let [withLowercase, setWithLowercase] = useState(false)
  let [withUppercase, setWithUppercase] = useState(false)
  let [withSymbols, setWithSymbols] = useState(false)
  let [password, setPassword] = useState("")

  function generatePassword(withLowercase, withUppercase, withSymbols, withLength) {
    let alphabet = NUMBERS
      + (withLowercase ? LOWERCASE : "")
      + (withUppercase ? UPPERCASE : "")
      + (withSymbols   ? SYMBOLS   : "")
    return (customAlphabet(alphabet, withLength)())
  }

  function doGeneratePassword() {
    setPassword(generatePassword(withLowercase, withUppercase, withSymbols, withLength))
  }

  return <div className="p-3">
    <h1 className="h3 mb-3">Generate a secure password</h1>
    <div>
      <input value={password} readOnly/>
    </div>
    <div className="mt-4">
      <div>
        <label>Length</label>
        <input type="range" className="ml-2"
               value={withLength}
               onChange={e => setWithLength(Number(e.target.value))}
               min={6}
               max={12}/>
        <span className="ml-2">{withLength}</span>
      </div>
      <div className="mt-1">
        <input type="checkbox"
               readOnly
               checked={true}/>
        <label className="ml-2">Numbers (always enabled)</label>
      </div>
      <div className="mt-1">
        <input type="checkbox"
               checked={withLowercase}
               onChange={e => setWithLowercase(e.target.checked)}/>
        <label className="ml-2">Lowercase</label>
      </div>
      <div className="mt-1">
        <input type="checkbox"
               checked={withUppercase}
               onChange={e => setWithUppercase(e.target.checked)}/>
        <label className="ml-2">Uppercase</label>
      </div>
      <div className="mt-1">
        <input type="checkbox"
               checked={withSymbols}
               onClick={e => setWithSymbols(e.target.checked)}/>
        <label className="ml-2">Symbols</label>
      </div>
      <button type="button" className="btn btn-primary mt-1"
              onClick={doGeneratePassword}>Generate</button>
    </div>
  </div>
}
