

function suma(n1: number, n2: number): number {
  return n1 + n2;
}

let tres = suma(1, 2);
// suma(1, 2, 4);


// function mostrar(txt: string): void {
//   console.log(txt);
// }

let ciudades: Array<string> = ['Madrid', 'Barcelona', 'Valencia'];

// ciudades.forEach(mostrar);
// ciudades.forEach(function (txt: string) {
//   console.log(txt)
// })

ciudades.forEach((txt: string) => {
  console.log(txt)
})

ciudades.forEach(txt => {
  console.log(txt)
})

ciudades.forEach(() => {
  console.log('Ciudad')
})

ciudades.forEach((ciudad, pos) => {
  console.log(pos, ciudad);
})

// let ciudadesMayus = ciudades.map(ciudad => {
//   return ciudad.toUpperCase();
// })

let ciudadesMayus = ciudades.map(ciudad => ciudad.toUpperCase())
console.log(ciudadesMayus);

let objCiudades = ciudades.map((ciudad: string) => ({ciudad: ciudad, pais: 'España'}))
// let objCiudades = ciudades.map((ciudad: string) => {
//   return {ciudad: ciudad, pais: 'España'}
// })
console.log(objCiudades);

// Problema this

function serie() {
  this.numTemporadas = 3;
  // let self = this;

  // setTimeout(function() {
  //   console.log(this.numTemporadas)
  //   // console.log(self.numTemporadas)
  // }.bind(this), 2000);

  setTimeout(() => {
    console.log(this.numTemporadas);
  }, 1000)

  console.log('Fuera del STO: ' + this.numTemporadas)
}

serie();

let f: (n1: number) => void;

f = (n1) => {
  console.log('aa');
}
f(3);

let f1: (n1: number) => void = (n1) => {
  console.log('aa');
};
f1(3);


// Parámetros opciones y por defecto

function hideWords(texto: string, palabras: Array<string> = [], simbolo?: string): string {
  simbolo = simbolo ?? '*';
  // simbolo = simbolo || '*';

  for (let palabra of palabras) {
    const regExp = new RegExp(palabra, 'g');
    texto = texto.replace(regExp, simbolo.repeat(palabra.length));
  }

  return texto;
}

console.log(hideWords('En un lugar de la Mancha de cuyo nombre no quiero acordarme...', ['no', 'Mancha']))
// 'En un lugar de la ****** de cuyo **mbre ** quería acordarme...'

console.log(hideWords('En un lugar de la Mancha de cuyo nombre no quiero acordarme...'))

console.log(hideWords('En un lugar de la Mancha de cuyo nombre no quiero acordarme...', ['no', 'Mancha'], '-'));
console.log(hideWords('En un lugar de la Mancha de cuyo nombre no quiero acordarme...', ['no', 'Mancha'], ''));


// Rest op en parametros

// function getNumLoteria(n1, n2, n3, n4, n5, n6) {
//   if (n6) {

//   }
// }


function getNumLoteria(id: number, ...nums: Array<number>): string {
  return `Los números para el sorteo ${id} son: ${nums.sort((a, b) => a - b).join(' - ')}`
}

console.log(getNumLoteria(19523, 1, 8, 45, 15, 34))
console.log(getNumLoteria(19523, 1, 8, 45, 15, 34, 4))

// console.log(['1', '2', '3'].includes('2'))

// Sobrecarga de funciones

function doble(val: number): number;
function doble(val: string): string;

function doble(val) {
  if (typeof(val) === 'string') {
    return val.repeat(2);
  } else {
    return val * 2;
  }
}

doble(100);
doble('Hola...');



// Interfaces
interface IMedia {
  titulo: string,
  descripcion: string,
}

interface ISerie extends IMedia {
  numTemporadas: number,
  personajes: Array<string>,
  finalizada?: boolean,
  temporadasVistas: number,
  vista: () => boolean
}

interface ISerie {
  directores: Array<string>
}

let twd: ISerie = {
  titulo: 'The Walking Dead',
  descripcion: 'Serie de zombies',
  numTemporadas: 10,
  directores: ['...'],
  personajes: [
    'Daryl',
    'Rick',
    'Maggie',
    '...'
  ],
  // finalizada: false
  temporadasVistas: 10,
  vista: function() {
    console.log(this);
    return this.numTemporadas - this.temporadasVistas === 0;
  }
}

console.log(this)
console.log(twd.vista())
