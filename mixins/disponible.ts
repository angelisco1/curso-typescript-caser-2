

class Disponible {
  estaDisponible: boolean = true;

  cambiarDisponible() {
    this.estaDisponible = !this.estaDisponible;
  }
}

export default Disponible;