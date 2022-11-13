const texto = `
  - (11) 98756-1212
  -98765-4321
  - (85) 99988-7766
  - (21) 3261-8899
`
//   \(?        pegar o parenteses de forma opcional(?)
//   \d{0,2}    pegar o ddd
//   \s?        pegar espaço depois de fechar parenteses no ddd, opcional
//   \d{4,5}    pegar 4 ou 5 numeros da primeira parte do telefone
//   -          pegar o traço que separa o numero do telefone
//   \d{4}      pegar os 4 numeros da segunda parte
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))
