import React, { useEffect, useState } from 'react'

const SeriesSearch = () => {
  
  const [value, setValue] = useState("");
  const [series, setSeries] = useState(null);

  const publicKey = import.meta.env.VITE_UKEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;

  const click = async (e) =>{
    e.preventDefault();
    let userInput = value;
    try{
      let seriesResult = await fetch(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${userInput}${ts}&apikey=${publicKey}${hash}`)
      seriesResult = await seriesResult.json();
      setSeries(seriesResult.data);
      console.log(seriesResult.data)
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
        SeriesSearch
      </div>
      <input type='text' id="submitSeriesInput" onChange={change} value={value}placeholder='I want to see ...'/>
      <button id="submitSeriesSearch" onClick={click}>Sumbit</button>
    </div>
  )
  
}

export default SeriesSearch