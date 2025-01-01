


const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
// mandar algo dentro de la funcion getSaludo entre () para que el valor no sea undefined.
console.log(`Este es un texto: ${getSaludo(nombre)}`);