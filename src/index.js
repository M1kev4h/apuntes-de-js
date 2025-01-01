//operadoeres condicionales

const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {  
//     mensaje = 'Inactivo';
// } 


// const mensaje = (activo) ? 'Activo' : 'Inactivo';

//forma mas practica para mostrar algo si solo quiero que se muestre al ser true.
const mensaje = activo && 'Activo';

console .log(mensaje);