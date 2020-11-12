let equipos1 = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla']
// ----
// Barcelona vs Valencia
// Real Madrid vs Sevilla
// ----
// Valencia vs Real Madrid
// Barcelona vs Sevilla

let equipos2 = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla', 'At Bilbao']
// ----
// Valencia vs Real Madrid
// Barcelona vs Sevilla
// At Bilbao pasa de fase automaticamente

// Enfrentamientos aleatorios
// Desestructuracion y rest operator
// Pista: podeis utilizar funciones recursivas


// Recursiva
function enfrentamientos(equipos: Array<string>): void {
  if (equipos.length < 2) {
    if (equipos.length === 1) {
      console.log(`El ${equipos[0]} pasa directamente...`);
    }
    console.log('Ya no quedan más equipos')
  } else {
    const [ equipo1, equipo2, ...restoEquipos ] = equipos;
    console.log(`${equipo1} vs ${equipo2}`);
    enfrentamientos(restoEquipos)
  }
}

function shuffle(equipos: Array<string>): Array<string> {
  const nuevoArray: Array<string> = []

  for (let i = equipos.length - 1; i >= 0; i--) {
    const pos = Math.floor(Math.random() * equipos.length);
    // const equipo = equipos.splice(pos, 1);
    // nuevoArray.push(equipo[0])

    const [ equipo ] = equipos.splice(pos, 1);
    nuevoArray.push(equipo);
  }

  return nuevoArray;
}

const equipos1Aleatorios: Array<string> = shuffle(equipos1);
// console.log(equipos1Aleatorios)
enfrentamientos(equipos1Aleatorios)

const equipos2Aleatorios: Array<string> = shuffle(equipos2);
// console.log(equipos2Aleatorios)
enfrentamientos(equipos2Aleatorios)
