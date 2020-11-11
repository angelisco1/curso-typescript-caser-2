let msg: string = 'Hola mundo!';
msg = '3';
msg = 'dos';

let num: number = 2;
let numPI: number = 3.14;

let numMenorQuePI: string = num < numPI ? 'Si' : 'No';
console.log(numMenorQuePI);

let esVerdad: boolean = true;

let strNull: string = null;
let numNull: number = null;
let boolNull: boolean = null;

let strUndefined: string;

console.log(strUndefined);

let cualquierTipo: any = 2;
cualquierTipo = 'un string';
cualquierTipo = true;

let numMax = 4; // Por defecto infiere que es un number

let unStr; // Si no le asignamos tipo ni valor, el tipo es any por defecto
console.log(unStr);

console.log(typeof(numMax))
console.log(typeof(unStr)) // Any en JS no existe y por tanto muestra undefined, porque no sabe el tipo de datos que almacena


// Mostrar mensaje si val es distinto de null o undefined
let val = 0;
// let val = '';
if (!val) {
  console.log('Es null o undefined');
} else {
  console.log('No es null ni undefined');
}

let esNullOUndefinedOld = val || 'Es null o undefined';
console.log(esNullOUndefinedOld)

// Op coalescencia nula
let esNullOUndefined = val ?? 'Es null o undefined';
console.log(esNullOUndefined)

// Template literals
let persona = {
  nombre: 'Charly',
  apellido: 'Falco',
  dni: '00000000W'
}

let personaStr: string = persona.nombre + ' ' + persona.apellido + ' tiene el DNI: ' + persona.dni;
let personaStrTemplateLit: string = `${persona.nombre} ${persona.apellido} tiene el DNI: ${persona.dni}`;
console.log(personaStr);
console.log(personaStrTemplateLit);

personaStr = 'Nombre completo: ' + persona.nombre + ' ' + persona.apellido + '\nDNI: ' + persona.dni;

personaStrTemplateLit = `Nombre completo: ${persona.nombre} ${persona.apellido}
DNI: ${persona.dni}`;

console.log(personaStr);
console.log(personaStrTemplateLit);

// let p1: string = `<p>Nombre completo: ${persona.nombre} ${persona.apellido}</p>`;
// let p2: string = `<p>DNI: ${persona.dni}</p>;
// body.innerHTML = p1;
// body.innerHTML += p2;


// Arrays
let colores: Array<string> = ['azul', 'rojo', 'amarillo', 'verde'];

// Tupla
let telefono: [string, number] = ['+34', 666111333]
let direccion: [calle: string, num: number, letra: string] = ['Calle Piruleta', 23, 'B']

console.log(colores[1])
console.log(telefono[1])
// A las tuplas etiquetadas no se accede con los alias. Solo con las posiciones
// console.log(direccion['calle'])
// console.log(direccion.calle)
console.log(direccion[0])

let prueba: [string, string, [number, number]] = ['a', 'b', [1, 2]];
console.log(prueba[2])
console.log(prueba[2][1])

// let matriz: Array<Array<number>> = [[0, 1, 2], [1, 2, 3]];
// matriz[1][2]

// Alias de tipos y unión de tipos
type tipoDoble = number | string;

let arrayNums: Array<tipoDoble> = [0, 'uno', 2, 'tres'];

let numOLetra: tipoDoble = 'a';
numOLetra = 1;

// type texto = string;


// Desestructuración

persona = {
  nombre: 'Charly',
  apellido: 'Falco',
  dni: '00000000W'
}

let n: string = persona.nombre;
let a: string = persona.apellido;
let d: string = persona.dni;
console.log(n, a, d)

// let { nombre, apellido, dni } = persona;
let { nombre: n1, apellido: a1, dni: d1 } = persona;
console.log(n1, a1, d1)


colores = ['azul', 'rojo', 'amarillo', 'verde'];
let azul: string = colores[0];
let rojo: string = colores[1];
let amarillo: string = colores[2];
let verde: string = colores[3];
console.log(azul, rojo, amarillo, verde);

let [ a2, r2, m2, v2 ] = colores;
console.log(a2, r2, m2, v2);

// Spread op y rest op

let personaje1 = {
  nombre: 'Michael Scoffield',
  serie: 'Prison Break'
}
// personaje2.nombre = 'Lincoln Barrows';

// let personaje2 = personaje1;
// let personaje2 = Object.assign({}, personaje1, { nombre: 'Lincoln Barrows', otrasSeries: ['Otra'] });

let personaje2 = {...personaje1, nombre: 'Lincoln Barrows'};
// let personaje3 = { personaje1 };
// personaje2.nombre = 'Lincoln Barrows';

console.log(personaje1)
console.log(personaje2)
// console.log(personaje3)


// let [ a3, r3, m3, v3 ] = colores;
// console.log(a3, r3, m3, v3);

let [ a3, r3, ...restoColores ] = colores;
console.log(a3, r3, restoColores);

let [ , r4, a4 ] = colores;
console.log(r4, a4);

// Estructuras condicionales

if (colores.length === 0) {
  console.log('No hay colores');
} else {
  console.log(`Hay ${colores.length} colores`);
}


for (let i = 0;i < colores.length;i++) {
  console.log(colores[i]);
}

for (let i in colores) {
  console.log(colores[i]);
}

for (let color of colores) {
  console.log(color);
}

let personas = {
  "-x3jg34gh": {
    "nombre": "Charly",
    "apellido": "Falco"
  },
  "-x3asdasd": {
    "nombre": "Mike",
    "apellido": "Kozinski"
  }
}

let arrPersonas = [];
for (let key in personas) {
  arrPersonas.push({
    id: key,
    // nombre: personas[key].nombre,
    // apellido: personas[key].apellido,
    ...personas[key]
  });
}

console.log(arrPersonas)

// Object.keys(personas)