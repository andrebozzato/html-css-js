const produtos = [
  { nome: 'notebook', preco: 2100 },
  { nome: 'smartphone', preco: 400 }
]

const total = produtos.reduce((a, i) => (a = a + i.preco), 0)

console.log(total)

// const carrinho = [
//   { nome: 'Caneta', qtde: 10, preco: 7.99 },
//   { nome: 'Impressora', qtde: 0, preco: 649.5 },
//   { nome: 'Caderno', qtde: 4, preco: 27.1 },
//   { nome: 'Lapis', qtde: 3, preco: 5.82 },
//   { nome: 'Tesoura', qtde: 1, preco: 19.2 }
// ]

// const subtotal = (item) => item.qtde * item.preco
// const somar = (acc, el) => acc + el

// const total = carrinho.map(subtotal).reduce(somar)

// console.log(total)
