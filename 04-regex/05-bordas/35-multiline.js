const texto = `
Léo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g)) // verifica qtas linhas tem

console.log(texto.match(/^(\w).+\1$/gi))

console.log(texto.match(/^(\w).+\1$/gim))
