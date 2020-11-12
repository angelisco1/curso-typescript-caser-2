class Usuario {
  constructor(
    public username: string,
    public email: string,
    public fechaNacimiento: Date
  ) { }
}

function saludar() {
  console.log('hola');
}

function despedirse() {
  console.log('adios');
}

export { saludar, despedirse };
export default Usuario;