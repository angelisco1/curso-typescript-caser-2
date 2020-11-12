import User, { saludar as hola, despedirse } from './usuario';
import * as Utils from './utils';


const falco = new User('charlyfalco', 'charly.falco@gmail.com', new Date(1970, 9, 12));
console.log(falco.email);

hola();
despedirse();

console.log(Utils.PI);
console.log(Utils.area());