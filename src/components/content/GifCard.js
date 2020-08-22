import React from 'react'

export const GifCard = ({ url, title }) => {
  return (
    <div className="gifCard">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
