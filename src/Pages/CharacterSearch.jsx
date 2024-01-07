import React, { useState } from 'react'

const CharacterSearch = () => {

  const publicKey = import.meta.env.VITE_UKEY;
  
  const [value, setValue] = useState("");
  const click = () =>{
    let userInput = value
    console.log(userInput)
  }

  const change = evt =>{
    setValue(evt.target.value)
  }

  return (
    <div class="page-container">
      <div>
        CharacterSearch
      </div>
      <input type='text' id="submitCharInput" onChange={change} value={value}placeholder='I want to see ...'/>
      <button id="submitCharSearch" onClick={click}>Sumbit</button>
    </div>
  )
}

export default CharacterSearch