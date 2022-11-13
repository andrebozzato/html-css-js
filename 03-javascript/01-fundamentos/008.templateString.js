const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const template = `
  Olá
  ${nome}!`
console.log(template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

//função dentro de template string
const up = (texto) => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
