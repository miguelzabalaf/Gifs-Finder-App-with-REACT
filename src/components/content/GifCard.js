import React from 'react'

export const GifCard = ({ url, title }) => {
  return (
    <div className="gifCard">
      <img loading="lazy" src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
