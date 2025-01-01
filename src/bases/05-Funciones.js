//Funciones

const saludar = (nombre, apellido) => {
   return `Hola, ${nombre} ${apellido}`;
};

// si la funcion solo tiene un return se puede hacer de la siguiente manera.
const saludar2 = (nombre, apellido) => 
  `Hola, ${nombre} ${apellido}`;

//si queremos que la funcion retorne algo sin parametros se puede hacer de la siguiente manera.
const saludar3 = () => 'Hola Mundo';

console .log(saludar('Michael ','Jackson'));
console .log(saludar2('Fer ','Herrera'));
console .log(saludar3());


const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

console.log(getUser ());

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre
  }
}
 const usuarioActivo = getUsuarioActivo('Michael');
  console.log(usuarioActivo);

  const usuarioActivo2 = (nombre,apellido,edad) => ({
    uid: 'ABC567',
    username: nombre,
    lastname: apellido,
    years: edad,
  });
  
  console.log(usuarioActivo2('fernando','herrera',30));