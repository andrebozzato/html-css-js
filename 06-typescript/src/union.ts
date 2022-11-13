let age: number | string
age = 20
age = 'vinte'

function showPet(pet: 'dog' | 'cat') {
  console.log(pet)
}

showPet('dog')
