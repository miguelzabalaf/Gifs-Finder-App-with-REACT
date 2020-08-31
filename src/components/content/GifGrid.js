import React from 'react';
import { SubTitle } from './SubTitle';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { NotFoundGifs } from './NotFoundGifs';
import { SlideCategories } from './SlideCategories';

export const GifGrid = ({ category, setCategories }) => {

  const {  data : images, /*loading*/ } = useFetchGifs( category );

  const handleDeleteGridItems = () => {
    console.log('Delete:', category)
    setCategories( allCat => allCat.filter( item => item !== category ));
  }


  return (
    <div id={ category }>
      {/* { loading ? 'Cargando..' : 'Data cargada' } */}
      <div className="gridCategorie">
        <SubTitle text={ category }/>
        <div className="deleteGrid" onClick={ handleDeleteGridItems } >
          <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
          </svg>
        </div>
          { images.length === 0 ? <NotFoundGifs category={ category } /> : <SlideCategories images={ images } /> }
        </div>
      </div>
  )
}