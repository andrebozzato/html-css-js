// desestruturação com arrays
const arr = [1, 2, 3, 4, 5]
const [num1, num2, num3, num4, num5] = arr

console.log('num 1: ' + num1)
console.log('num 2: ' + num2)
console.log('num 3: ' + num3)
console.log('num 4: ' + num4)
console.log('num 5: ' + num5)

// desestruturação com objetos
const pessoa = {
  nome: 'Andre',
  profissao: 'programador',
  idade: 45
}

const { nome: nomeVar, profissao: profissaoVar, idade: idadeVar } = pessoa

console.log(nomeVar)
console.log(profissaoVar)
console.log(idadeVar)

// desestruturação com funções
function teste() {
  return ['teste', 45]
}

const [varA, varB] = teste()

console.log(varA)
console.log(varB)

// ignorando elementos
const arrDois = [5, 10, 15]

const [, dez, quinze] = arrDois
console.log(dez)
console.log(quinze)

// loop strings
const novaString = 'laranja'
const [z, x, v] = novaString
console.log(z, x, v)
