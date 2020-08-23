import React from 'react'

export const NotFoundGifs = ({ category }) => {

  const message = <h3>We can't find <span className="">{ category }</span> gifs.</h3>

  return (
    <div className="notFoundGifs">
      { message }
    </div>
  )
}
