import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { MessageMinChar } from './MessageMinChar';

export const InputAddCategory = ({ setCategories }) => {

  
  const [inputValue, setinputValue] = useState('')

  const [minCharacters, setMinCharacters] = useState({
    stateInput: true,
    messageInput: ''
  })

  const { stateInput, messageInput } = minCharacters

  const handleInputChange = (event) => {
    if ( inputValue.trim().length > 1 ) {
      setMinCharacters(() => ({
          stateInput: true,
          messageInput: ''
        })
      )
    }
    const word = event.target.value;
    // console.log(word);
    setinputValue( word );


  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Para evitar el recardado de la página.
    if( inputValue.trim().length >= 3 ) {
      console.log('Submit Hecho con el siguinete texto:', inputValue);
      setCategories( cats => {
        const valueInclude = cats.includes(inputValue);
        if ( valueInclude ) {
          return cats
        } else {
          return [inputValue, ...cats ]  
        }
      });
      setinputValue('')
    } else {
      // Message for min 3 characters
      setMinCharacters(() => ({
          stateInput: false,
          messageInput: 'Minimum 3 characters'
        })
      )
    }
  }


  return (
    <>
    <form className="form" onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
      <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
        <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
      </svg>
      </button>
    </form>
    {
      stateInput ? null : <MessageMinChar message={ messageInput } />
    }
    </>
  )
}

InputAddCategory.propTypes = {

  setCategories: PropTypes.func.isRequired

} 