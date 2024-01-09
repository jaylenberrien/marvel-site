import React from 'react'
// import characters from '../Pages/CharacterSearch';

const CharacterCard = ({characters}) => {
  if(!characters){
    return null;
  }

  return (
    <div id='charSearchResult'>
        {characters.results.map((character)=> ( 
            <div key={character.id}>
                <p>{character.name}</p>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}alt={character.name} />
                <p>{character.description}</p>
            </div>
        ))};


    </div>
  );
};

export default CharacterCard