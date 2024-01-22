import React from 'react'


const ComicCard = ({comics}) => {
  if(!comics){
    return null
  }

  return (
    <div id='charSearchResult'>
        {comics.results.map((comic)=> ( 
            <div class='character-container' key={comic.id}>
                <h3>{comic.name}</h3>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}alt={comic.name} />
                <p>{comic.description}</p>
            </div>
        ))}


    </div>
  )
}

export default ComicCard