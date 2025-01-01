const arreglo = [1, 2, 3, 4, ];

let arreglo2 = [...arreglo, 5];
// arreglo2.push(6);

const arreglo3 = arreglo2.map( (unidad) => unidad * 2 );
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);