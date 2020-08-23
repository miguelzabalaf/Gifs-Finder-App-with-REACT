// Comienza con use para indicar a otros programadores que es un hook
// Custom Hook:

import { useState, useEffect } from "react"
import { getGifs } from "../herlpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    // Mi estado inicial va a ser un objeto que va a tener un arreglo vacio y un loading = true
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs( category )
      .then( imgs => {
        setState({
          data: imgs,
          loading: false
        })
      } )


  }, [ category ] );


  return state; // { data: [], loading: true };

}
