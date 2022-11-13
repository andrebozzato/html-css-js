// "g" - global, depois de encontrar o primeiro resultado, continua buscando
// exemplo: buscando a letra "C" maiusculo e "a" minusculo
const texto = 'Carlos assinou o abaixo Assinado.'

console.log(texto.match(/C|a/)) // sem flag g
console.log(texto.match(/C|a/g)) // com flag g
