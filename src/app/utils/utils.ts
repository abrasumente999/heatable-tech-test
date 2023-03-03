export function capitaliseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function nextId(pokemonId: number) {
  let newId = pokemonId;
  if (pokemonId === 156) {
    newId = 1;
    return newId;
  } else {
    return newId + 1;
  }
}
export function previousId(pokemonId: number) {
  let newId = pokemonId;
  if (pokemonId === 1) {
    newId = 156;
    return newId;
  } else {
    return newId - 1;
  }
}
