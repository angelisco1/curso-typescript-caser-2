namespace Validador {
  const NOMBRES_STARK = ['arya', 'robb', 'sansa', 'rickon', 'bran', 'tony'];

  export function esStark(nombre: string): boolean {
    return NOMBRES_STARK.includes(nombre);
  }

  export function longitudMayorA5(texto: string): boolean {
    return texto.length > 5;
  }
}


console.log(Validador.esStark('angel'));