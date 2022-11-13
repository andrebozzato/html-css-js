/// VAR ///

var nome = 'Pedro'

function dizerNome() {
  var nome = 'João'
  console.log(`var 2) ${nome}`)
}

console.log(`var 1) ${nome}`)
dizerNome()

// problema:

if (true) {
  var nome = 'Tereza'
}

console.log(`var 1) ${nome}`)
dizerNome()
