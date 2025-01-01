//import export y funciones

import { heroes } from '../data/heroes '


// console.log(heroes);

//funcion find para buscar un heroe por su id
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(5));

//funcion filter para buscar heroes por su owner

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));