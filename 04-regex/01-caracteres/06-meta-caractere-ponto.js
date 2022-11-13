// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

// existe na string o numero "1" e o "2" com qualquer caractere no meio?
console.log(texto.match(/1.2/g))
// [ '1,2' ]

console.log(texto.match(/1..2/g))
// null

// usando duas vezes o coringa
console.log(texto.match(/1..,/g))
// [ '1,2,' ]

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
// [ '8.3', '8.8' ]

// o ponto serve como coringa e também como ponto literal na mesma receita
console.log(notas.match(/.\../g))
