import React, { useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard';

const CharacterSearch = () => {

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;
  
  const [value, setValue] = useState("");
  const [characters, setCharacters] = useState(null);

  const click = async (e) =>{
    e.preventDefault();
    let userInput = value;
    try{
      let charactersResult = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${userInput}${ts}&apikey=${publicKey}${hash}`)
      charactersResult = await charactersResult.json();
      setCharacters(charactersResult.data);
      console.log(charactersResult.data)
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
        CharactersSearch
      </div>
      <input type='text' id="submitCharInput" onChange={change} value={value}placeholder='I want to see ...'/>
      <button id="submitCharSearch" onClick={click}>Sumbit</button>
      <CharacterCard characters={characters} />
    </div>
  )
}

export default CharacterSearch