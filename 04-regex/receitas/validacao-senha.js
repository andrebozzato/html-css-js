const texto = `
123456
cod3r
QUASE123!
#0pA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`
const entre6e20caracteres = /^.{6,20}$/gm
console.log(texto.match(entre6e20caracteres))

/*
 *    ^   delimitador de inicio de linha
 *
 */
const a = /^(?=.*[A-Z])/gm
