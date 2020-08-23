export const getGifs = async ( category ) => {

  const apiKey = `uASOXFkx9XvI9NZKfBssPF3O6v7at0LE`
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=${ apiKey }`

  const resp = await fetch( url );

  const { data } = await resp.json();

  const gifs = data.map( img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }

  });

  console.log('Gifs encontrados: ', gifs)
  // setImages( gifs );
  return gifs;
}