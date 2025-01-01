//Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
//Funciona como base de datos para que la funcion pueda usar los datos de la persona.
const persona2 = {
    nombre: 'Peter',
    apellido: 'Parker',
    edad: 16,
    clave: 'Spiderman',
    rango: 'Soldado',
};

const { nombre, edad, clave } = persona;

console.log(nombre , edad , clave);

//funcione para usar esos datos.
const retornaPersona = ({nombre, edad, apellido = 'cualquiera', rango = 'Capitán', clave = "alias"}) => {
    console.log(nombre, apellido, edad, rango, clave);
}

//llamamos a la funcion y le pasamos el objeto persona.
retornaPersona(persona);
retornaPersona(persona2);

const retPersona = ({clave, nombre, edad, apellido}) => {
    return {
        nombre: nombre,
        apellido: apellido,
        nombreClave: clave,
        years: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }
    }
};

//para desestructurar el objeto de una funcion y solo obtener los datos que necesitamos.
const {nombreClave, years, latlng:{lat ,lng}} = retPersona(persona); 

console.log(nombreClave, years,lat ,lng);