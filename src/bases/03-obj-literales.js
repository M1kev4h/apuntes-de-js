

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,

  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  }
};


console.log( { persona } );



const persona2 = { ...persona };
persona2.nombre = 'Michael';
persona2.apellido = 'Jackson';
persona2.edad = 50;


console.log( { persona2 } );