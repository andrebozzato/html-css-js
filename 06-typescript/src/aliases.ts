type Pet = 'dog' | 'cat' | 'zebra'

function showPet(pet: Pet) {
  console.log(pet)
}

function displayPet(pet: Pet) {
  console.log(`display ${pet}`)
}

showPet('cat')

displayPet('zebra')
