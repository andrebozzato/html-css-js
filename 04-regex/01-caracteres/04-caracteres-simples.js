const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

// 1- separar os itens a partir de cada virgula encontrada
console.log('1: ', texto.split(regexVirgula))

// 2- buscar a primeira virgula no array
console.log('2: ', texto.match(regexVirgula))

// 3- buscar todas as virgulas no array
console.log('3: ', texto.match(/,/g))

// 4- buscar letra "A" maiuscula (não vai encontrar porque nao tem)
console.log('4: ', texto.match(/A/g))

// 5- buscar letra "A" com flag "i", para ignorar maiuscula e minuscula
console.log('5: ', texto.match(/A/gi))

// 6- buscar numero "2"
console.log('6: ', texto.match(/2/g))

// 7- buscar um texto expecifico
console.log('7: ', texto.match(/b c!/))
