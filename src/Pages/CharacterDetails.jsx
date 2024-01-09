

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;
  
  const {id} = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchCharacterDetails= async (characterId) =>{
    try{
      let characterDetailsResult = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?${ts}&apikey=${publicKey}${hash}`)
      characterDetailsResult = await characterDetailsResult.json();
      setCharacterDetails(characterDetailsResult.data.results[0]);
      console.log(characterDetailsResult.data.results[0]);
    }
    catch (error){
      console.log(error);
    }

  };
  
  useEffect(()=>{
    fetchCharacterDetails(id);
  }, [id]);


    return(
        <div class='page-container'>
            <h1 class="details-title"> Character Details</h1>
            {characterDetails && (
            <div class="char-details-container" key={characterDetails.id}>
              <div class="center">
                <h2>{characterDetails.name}</h2>
                {characterDetails.thumbnail && (
                    <img src={`${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`}alt={characterDetails.name} />
                )};
              </div>
                <p>Description:</p>
                <p>{characterDetails.description}</p>
                <p>Comics:</p>
                <ul>
                    {characterDetails.comics.items.slice(0, 5).map((comic)=>(
                        <li key={comic.name}>{comic.name}</li>
                    ))}
                </ul>
                <p>Series:</p>
                <ul>
                    {characterDetails.series.items.slice(0, 5).map((serie)=>(
                        <li key={serie.name}>{serie.name}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );

  
};

export default CharacterDetails;
