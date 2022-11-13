const moeda = 'R$ 1.369,34'
console.log(moeda.replace(/[^0-9]/gi, '') / 100)

const numero = 1369.34

console.log(numero.toString().replace(/[0-9]{1,3}/g, ''))
