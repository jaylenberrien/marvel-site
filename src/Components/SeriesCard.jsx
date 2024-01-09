import React from 'react'
// import characters from '../Pages/CharacterSearch';

const SeriesCard = ({series}) => {
  if(!series){
    return null;
  }

  return (
    <div id='charSearchResult'>
        {series.results.map((series)=> ( 
            <div class='character-container' key={series.id}>
                <p>{series.name}</p>
                <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`}alt={series.name} />
                <p>{series.description}</p>
            </div>
        ))};


    </div>
  );
};

export default SeriesCard