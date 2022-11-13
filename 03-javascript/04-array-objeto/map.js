const produtos = [
  { nome: 'notebook', preco: 2100 },
  { nome: 'smartphone', preco: 400 }
]

const precoEmReais = produtos.map((produto) => produto.preco * 4)

console.log(produtos, precoEmReais)
