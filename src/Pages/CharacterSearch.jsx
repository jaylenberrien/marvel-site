import React, { useEffect, useState } from 'react'

const CharacterSearch = () => {

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;
  
  const [value, setValue] = useState("");
  const [character, setCharacter] = useState(null);

  const click = async (e) =>{
    e.preventDefault();
    let userInput = value;
    try{
      let characterResult = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${userInput}${ts}&apikey=${publicKey}${hash}`)
      characterResult = await characterResult.json();
      setCharacter(characterResult.data);
      console.log(characterResult.data)
    }
    catch (error){
      console.log(error);
    }


  };
  

  

  const change = evt =>{
    setValue(evt.target.value)
  };

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