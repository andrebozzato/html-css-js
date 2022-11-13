let nome = 'Pedro'
const numero = 1
console.log(`let 1) ${nome}, numero ${numero}`)

function dizerNome() {
  var nome = 'João'
  const numero = 2
  console.log(`let 2) ${nome}, numero ${numero}`)
}
dizerNome()

if (true) {
  let nome = 'Tereza'
  const numero = 3
  console.log(`nome ${nome}, numero ${numero}`)
}

console.log(`let 1) ${nome}, numero ${numero}`)
dizerNome()

// let separa o nome das variaveis dentro de blocos de código
