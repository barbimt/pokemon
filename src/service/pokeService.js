
export const getTipoPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await response.json();
  return data.results;
  };


