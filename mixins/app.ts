import Disponible from './disponible';


class Persona implements Disponible {
  estaDisponible: boolean = true;
  constructor(public nombre: string) {}

  cambiarDisponible: () => void;
}

class HabitacionHotel implements Disponible {
  estaDisponible: boolean = true;
  constructor(public numero: number) {}

  cambiarDisponible: () => void;
}


function applyMixins(claseSinMixin: any, clasesMixins: Array<any>) {
  clasesMixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
      claseSinMixin.prototype[name] = mixin.prototype[name];
    })
  })
}

// const p1 = new Persona('aaa');
// console.log(p1.estaDisponible);
// p1.cambiarDisponible();
// console.log(p1.estaDisponible);


applyMixins(Persona, [Disponible]);
applyMixins(HabitacionHotel, [Disponible]);


const p2 = new Persona('aaa');
console.log(p2.estaDisponible);
p2.cambiarDisponible();
console.log(p2.estaDisponible);
