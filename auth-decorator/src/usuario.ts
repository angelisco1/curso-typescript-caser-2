class Usuario {
  constructor(public username: string, public password: string) { }
}

export const usuarios: Array<Usuario> = [
  new Usuario('falco', '1234'),
  new Usuario('admin', 'admin'),
];