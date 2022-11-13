const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não define um conjunto

console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE
// https://unicode-table.com/pt

// tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)) // deixar comentado porque esta gerando erro
// Invalid regular expression: /[a-Z]/: Range out of order in character class
