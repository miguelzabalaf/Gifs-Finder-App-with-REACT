import React from 'react'

export const Title = ({ text, featuredText }) => {
  return (
    <h1 className="title">
      { text } <span className="featured">{ featuredText }</span>
    </h1>
  )
}
