import React, { useEffect, useState } from 'react'



const RanCharacterPage = () => {

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;
  
  const [character, setCharacter] = useState(null);

  const fetchCharacter = async (characterId) =>{

    try{
      let charactersResult = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?${ts}&apikey=${publicKey}${hash}`);
      charactersResult = await charactersResult.json();
      setCharacter(charactersResult.data.results[0]);
      console.log(charactersResult.data);
    }
    catch (error){
      console.log(error);
    }

  };

  let charArray = [1009629, 1009187, 1009268, 1009220, 1009368, 1009652, 1009351, 1017297, 1009610]
  
  

  useEffect(()=>{
    let ranChar = charArray[Math.floor(Math.random()* charArray.length)];
    fetchCharacter(ranChar);
  }, []);

  return(
    <div class='page-container'>
      <div class="ranPageBio">
        <h1>Random Popular Character</h1>
        <p>Here's one of the many cool characters you can discover!</p>
        <p>Search for more on the Character Search Page!</p>
      </div>

      {character && (
        <div key={character.id} class='character-container'>
            <h3>{character.name}</h3>
            {character.thumbnail && (
              <img class="charPic" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}alt={character.name} />
            )};
            <p>{character.description}</p>
        </div>
      )};
    </div>
  );
 
};

export default RanCharacterPage