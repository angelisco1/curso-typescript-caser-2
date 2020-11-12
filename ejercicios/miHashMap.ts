// Crear nuestro propio Map
// Clase generica
// Tenga los metodos:
// - set(key, val) (añade un nuevo elemento con su valor)
// - get(key) (obtiene un valor dada la clave)
// - has(key) (comprueba si la clave existe)
// - clear (vaciar el map)
// - show / toString (mostrar todos los datos)

// miMap.set('a', 'b')
// miMap = {
//   'a': 'b'
// }
// miMap['a'] => 'b'

interface IMiMap<K> {
  [key: string]: K
}

class MiMap<K> {
  constructor(private map: IMiMap<K> = {}) { }
  // constructor(private map: any = {}) { }

  set(key: string, val: K): void {
    this.map[key] = val;
  }

  get(key: string): K {
    if (this.has(key)) {
      return this.map[key];
    }
    return null;
  }

  has(key: string): boolean {
    return Object.keys(this.map).indexOf(key) > -1;
  }

  clear(): void {
    this.map = {};
  }

  show(): void {
    console.log(JSON.stringify(this.map));
  }
}

const map1 = new MiMap<number>();
map1.set('a', 3);
map1.set('b', 5);
console.log(map1.get('a'))
map1.show();
map1.clear();
map1.show();
