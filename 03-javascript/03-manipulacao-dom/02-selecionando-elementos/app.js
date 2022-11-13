document.getElementById // seleciona por ID
document.getElementsByTagName // seleciona por TAG
document.getElementsByClassName // seleciona por Classe
document.querySelector // seleciona por seletor especifico
document.querySelectorAll // seleciona todos por seletor especifico
// cuidado ao selecionar elementos pela classe, pois a classe por ser utilizada em varios elementos

const input = document.querySelector('input#idade')
console.log(input)

const list = document.querySelector('ul')
console.log(list.children[0]) // filho
console.log(list.parentElement) // pai
console.log(list.parentElement.parentElement) // pai do pai
console.log(input.previousElementSibling) // elemento anterior
console.log(list.nextElementSibling) // elemento seguinte
