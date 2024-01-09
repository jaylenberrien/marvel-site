import React, { useEffect, useState } from 'react'
import ComicCard from '../Components/ComicCard';

const ComicSearch = () => {
  
  const [value, setValue] = useState("");
  const [comics, setComics] = useState(null);

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;

  const click = async (e) =>{
    e.preventDefault();
    let userInput = value;
    try{
      let comicsResult = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${userInput}${ts}&apikey=${publicKey}${hash}`)
      comicsResult = await comicsResult.json();
      setComics(comicsResult.data);
      console.log(comicsResult.data)
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
        ComicSearch
      </div>
      <input type='text' id="submitComicSInput" onChange={change} value={value}placeholder='I want to see ...'/>
      <button id="submitComicSearch" onClick={click}>Sumbit</button>
      <ComicCard comics={comics} />
    </div>
  )
  
}

export default ComicSearch