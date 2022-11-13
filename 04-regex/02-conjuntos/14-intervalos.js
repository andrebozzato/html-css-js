const texto = '1,2,3,4,5,6,a.b c!d?E[f'

const regexLetras = /[a-z]/gi
console.log(texto.match(regexLetras))

// intervalo especifico de letras
const regexLetras2 = /[b-d]/gi
console.log(texto.match(regexLetras2))

// intervalo especifico de numeros
const regexNumeros = /[2-4]/g
console.log(texto.match(regexNumeros))

// letras e numeros especificos
const regexLetrasNumeros = /[A-Z1-3]/gi
console.log(texto.match(regexLetrasNumeros))
