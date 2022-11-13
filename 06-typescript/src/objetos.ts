// mostrar a cidade do usuário
type UF = 'PE' | 'MG' | 'SP'

interface User {
  name?: string
  address?: {
    city: string
    UF: UF
  }
  sayHello: () => void
}

function showCity(user: User) {
  user.name = 'Andre'
}

function showCity2(user: User) {
  user.address?.city
}

function showCity3(user: User) {
  user.sayHello = () => console.log('hello')
}

function showCity4(user: User) {
  return user.name?.toUpperCase()
}
