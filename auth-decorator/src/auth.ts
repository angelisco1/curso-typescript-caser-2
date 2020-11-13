import { AuthToken } from './token';

export function isLogged(target: Object, key: string, descriptor: any) {
  let oldDescriptorVal = descriptor.value;
  console.log(oldDescriptorVal);

  descriptor.value = function(...args: Array<any>) {
    // This en esta función es la instancia de la clase a la que se está aplicando el decorador
    const token = AuthToken.getToken();
    if (token) {
      let result = oldDescriptorVal.apply(this, args);
      console.log(result);
      return result;
    } else {
      throw new Error('No estas logueado');
    }
  }
  return descriptor;
}