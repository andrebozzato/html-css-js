// flag "i" - ignore case, busca letras minusculas e minusculas

// exemplo: buscando a letra "C" maiusculo e "a" minusculo
const flagG = 'Carlos casou no Amapa.'

console.log('sem a flag i: ', flagG.match(/C|a/g))
console.log('com a flag i: ', flagG.match(/C|a/gi))
