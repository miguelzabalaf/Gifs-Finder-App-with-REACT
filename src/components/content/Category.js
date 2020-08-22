import React from 'react'

export const Category = ({ category }) => {

  const link = `#${ category }`

  return (
    <a href={ link } className="category">
      <span>{ category }</span>
    </a>
  )
}
