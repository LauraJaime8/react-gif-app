import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  // Ejecuta la función getGifs cuando el componente se renderiza
  // la primera vez.
  useEffect( () => {
    getGifs(category)
      .then( imgs => {
        setState({
          data: imgs,
          loading: false
        })
      })
  }, [category])

  return state;
}