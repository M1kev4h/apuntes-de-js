//Promesas
import { getHeroeById } from "./bases/08-import-exp";

// const promesa = new Promise((resolve, reject) => {  
//     setTimeout(() => {
//         // resolve('Se ejecutó');
//         const heroe = getHeroeById(8);
//         resolve(heroe);
//         reject('No se pudo encontrar el héroe');
//     }, 1000);
// });
// promesa.then((heroe) =>{
//   console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if(heroe){
        resolve(heroe);
      } else
        reject('No se pudo encontrar el héroe');
      }, 1000);
  });
};

getHeroeByIdAsync(5)
.then(console.log)
.catch(console.warn);