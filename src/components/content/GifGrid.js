import React, { useEffect, useState } from 'react'
import { SubTitle } from './SubTitle'
import { GifCard } from './GifCard'
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, [] );

  const getGifs = async () => {

    const apiKey = `uASOXFkx9XvI9NZKfBssPF3O6v7at0LE`
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=15&api_key=${ apiKey }`

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => {

      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }

    });

    console.log(gifs)
    setImages( gifs );
  }

  const handleDeleteGridItems = () => {
    console.log('Delete:', category)
  }


  return (
    <div id={ category }>
    <div className="gridCategorie">
      <SubTitle text={ category }/>
      <div className="deleteGrid" onClick={ handleDeleteGridItems } >
        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
          <path d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
      <div className="slideCategories">
        {
          images.map( ({ title, id, url }) => (
             <GifCard key={ id } url={ url } title={ title } /> 
          ))
        }
        <div className="degree"></div>
      </div>
    </div>
    </div>
  )
}



GifGrid.propTypes = {

  setCategories: PropTypes.func.isRequired

} 