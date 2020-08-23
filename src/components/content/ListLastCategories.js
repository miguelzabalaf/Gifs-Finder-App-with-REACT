import React from 'react'
import { Category } from './Category'

export const ListLastCategories = ({ categories }) => {
  return (
    <div className="categories">
      {
      categories.map( cat => <Category key={ cat } category={ cat } /> )
      }
    </div>
  )
}
