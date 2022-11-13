interface UserNew {
  readonly name: string // não deixa alterar
  age: number
}

let user: UserNew = {
  name: 'Andre Bozzato',
  age: 45
}

user.age = 23
// user.name = 'Joao Silva' // erro demonstrado
