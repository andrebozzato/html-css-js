const texto = 'O joao recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir umaa quantificador usa {}

// pegar 1 ou 2 digitos de numeros
console.log(texto.match(/\d{1,2}/g))
// pegar 2 digitos de numeros
console.log(texto.match(/[0-9]{2}/g))
// pegar 1 ou mais digitos de numeros
console.log(texto.match(/\d{1,}/g))
// pegar palavras com 7 letras, não pega texto unicode
console.log(texto.match(/\w{7}/g))
// pegar palavras com 7 letras com unicode
console.log(texto.match(/[\wõ]{7,}/g))

// no futuro
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))
