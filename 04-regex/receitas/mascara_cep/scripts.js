const cpf = '28087264819'

// expressão regular
// replace
// /^(\d{3})(\d{3})(\d{3})(\d{2})/
// "$1.$2.$3-$4"

console.log(cpf)
console.log(cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'))
