// .outerHTML - todo o HTML do elemento
// .innerHTML - HTML interno
// .innerText - todo o texto, sem tags

// criar um elemento no html
const app = document.querySelector('div#app')

const link = document.createElement('a')
const textLink = document.createTextNode('Visitar Google')

link.setAttribute('href', 'http://google.com')
link.appendChild(textLink)

app.appendChild(link)

//excluir um elemento do html
const text = document.querySelector('div#app p')

app.removeChild(text)
