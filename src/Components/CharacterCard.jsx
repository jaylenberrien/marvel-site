import React from 'react'
import { Link } from 'react-router-dom';
// import characters from '../Pages/CharacterSearch';

const CharacterCard = ({characters}) => {
  return (
    <div id='charSearchResult'>
        {characters &&
          characters.results.map((character)=> ( 
            <Link key={character.id} to={`/character/${character.id}`}>
              <div class='character-container'>
                  <h3 class="char-name">{character.name}</h3>
                  {character.thumbnail && (
                    <img class="charPic" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}alt={character.name} />
                  )}
                  
                  <p>{character.description}</p>
              </div>
            </Link>
        ))}


    </div>
  )
}

export default CharacterCard