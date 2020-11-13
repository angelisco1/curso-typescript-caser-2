import { isLogged } from './auth';

export class ProyectoSecreto {
  constructor(public nombre: string, public informacion: string) { }

  @isLogged
  getInfo() {
    return JSON.stringify({nombre: this.nombre, informacion: this.informacion}, null, 2);
  }
}

export const proyectos: Array<ProyectoSecreto> = [
  new ProyectoSecreto('Proyecto Chewaka', 'Un proyecto super secreto...'),
  new ProyectoSecreto('Proyecto SALTA', 'Un proyecto super secreto que muy pocos saben de su existencia...'),
];
