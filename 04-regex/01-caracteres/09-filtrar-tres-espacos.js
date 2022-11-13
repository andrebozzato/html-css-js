const texto = 'a   b'
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))

// no futuro...
console.log(texto.match(/a\s+b/)) // "+" um ou mais espaços
console.log(texto.match(/a\s{3}b/))
