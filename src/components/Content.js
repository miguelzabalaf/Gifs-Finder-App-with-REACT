import React, { useState } from 'react';
import { Title } from './content/Title';
import { SubTitle } from './content/SubTitle';
import { InputAddCategory } from './content/InputAddCategory';
import { ListLastCategories } from './content/ListLastCategories';
import { GifGrid } from './content/GifGrid';
import { NotFoundListOfCategories } from './content/NotFoundListOfCategories';

export const Content = () => {

  const [categories, setCategories] = useState(['Spiderman'])

  return (
    <div className="content">

      <Title text="Gifs Frinder App with" featuredText="REACT"/>
      <SubTitle text="Developed and designed by Miguel Zabala" />
      <hr/>
      <InputAddCategory setCategories={ setCategories } />
      { categories.length === 0 ? <NotFoundListOfCategories/> : <ListLastCategories categories={ categories }/>  }
      {
        categories.map( ( category ) => (
          <GifGrid key={ category } category={ category } setCategories={ setCategories } />
        ))
      }

    </div>
  )
}
