const texto = `
  - (11) 98756-1212
  -98765-4321
  - (85)99988-7766
  - (21) 3261-8899
`
//    "\("                  começar buscando o parentese de abertura do ddd
//    "\d"                  dois numero do ddd
//    "\)"                  parentese que fecha o ddd
//    "\s?"                 espaço adicional entre o ddd e o numero, opcional
//    "(\(\d{2}\)\s?)?"     fechando o grupo, ddd é opcional

//    "\d{4,5}"             primeira parte do numero, com 4 ou 5 digitos
//    "\d{4}"             primeira parte do numero, com 4 digitos
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))
