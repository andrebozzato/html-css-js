const texto = `A primeira data exemplo é 2010-12-20
A segunda 2020-01-01
<data>2010-12-20</data>
{
  "data": "2010-12-20"
}
`

// console.log(texto.match(/(\d{4})-(\d{2})-(\d{2})/gm))
console.log(texto.replace(/(\d{4})-(\d{2})-(\d{2})/gm, '$3/$2/$1'))

// console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))
