const texto = '.$+*?-'

// dentro de um conjunto o metacaractere não precisa de scape
console.log(texto.match(/[.$+*?-]/g))
console.log(texto.match(/[$-?]/g))
