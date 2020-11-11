


// class Mascota {
//   nombre: string;
//   sonido: string;

//   constructor(nombre: string, sonido: string) {
//     this.nombre = nombre;
//     this.sonido = sonido;
//   }
// }

class Animal {
  protected nombre: string;
  private _sonido: string;

  constructor(nombre: string);
  constructor(nombre: string, _sonido: string);
  constructor(nombre, _sonido = null) {
    this.nombre = nombre;
    this._sonido = _sonido;
  }
  // constructor(protected nombre: string, private _sonido: string) {}

  get _nombre() {
    return this.nombre;
  }
  set _nombre(val) {
    this.nombre = val;
  }

  get sonido(): string {
    console.log('Pasa por el getter')
    return this._sonido;
  }

  set sonido(nuevoSonido: string) {
    console.log('Pasa por el setter')
    this._sonido = nuevoSonido;
  }
}

class Mascota extends Animal {
  readonly _duenyo: string;

  constructor(nombre: string, sonido: string);
  constructor(nombre: string, sonido: string, _duenyo: string);

  constructor(nombre, sonido, _duenyo = null) {
    if (!sonido) {
      super(nombre)
    } else {
      super(nombre, sonido)
    }
  }

  getNombre(): string {
    return this.nombre;
  }

  // set duenyo(val) {
  //   this._duenyo = val;
  // }
}

let perro: Mascota = new Mascota('Rocky', 'Guauuu', 'Charly');
// console.log(perro.nombre)
console.log(perro.getNombre())
console.log(perro.sonido)
perro.sonido += ' Guauuuuuuuuuu!!!' // perro.sonido = perro.sonido + ' Guauuuuuuuuuu!!!'
console.log(perro.sonido)
// perro.duenyo = 'Angel';
console.log(perro._duenyo);

let gato: Mascota = new Mascota('Roko', 'Miauuu');
console.log(gato.getNombre());
console.log(gato.sonido);
console.log(gato._duenyo);

let animal1: Animal = new Animal('Roko', 'Miauuu');
animal1.nombre;
console.log(animal1._nombre);
animal1._nombre = 'Otro nombre';
console.log(animal1._nombre);

let tortuga = new Mascota('n1', null, 'dueño');