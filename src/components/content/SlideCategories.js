import React from 'react'
import { GifCard } from './GifCard'

export const SlideCategories = ({ images }) => {
  return (
    <div className="slideCategories">
      {
        images.map( ({ title, id, url }) => (
          <GifCard key={ id } url={ url } title={ title } /> 
        ))
      }
      <div className="degree"></div>
    </div>
  )
}
