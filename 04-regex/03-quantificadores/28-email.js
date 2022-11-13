const texto = `
Os emails dos convidados são:
 - fulano@cod3r.com.br
 - xico@gmail.com
 - joao@empresa.info.br
 - maria_silva@registro.br
 - rafa.sampaio@yahoo.com.br
`
console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/g))

console.log(texto.match(/\w+@\w+\.\w{2,4}/g))

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
