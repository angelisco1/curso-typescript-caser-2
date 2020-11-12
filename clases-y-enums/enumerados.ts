// enum Color { Rojo, Amarillo, Negro, Azul, Naranja };
enum Color { Rojo = 101, Amarillo = 100, Negro, Azul, Naranja };

console.log(Color.Amarillo)
// console.log(Color.Negro)
// console.log(Color.Azul)
console.log(Color.Naranja)
console.log(Color[100])
console.log(Color[101])

enum Pais { España = 'es', Italia = 'it', Francia = 'fr' }

console.log(Pais.España)
console.log(Pais.Italia)