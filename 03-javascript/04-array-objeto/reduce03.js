const foods = [
  { type: 'carne', name: 'hamburguer' },
  { type: 'fruta', name: 'maça' },
  { type: 'carne', name: 'costela' },
  { type: 'fruta', name: 'banana' },
  { type: 'vegetal', name: 'cenoura' }
]

const total = foods.reduce((acumulador, food) => {
  if (!acumulador[food.type]) {
    acumulador[food.type] = []
  }
  acumulador[food.type].push(food.name)
  return acumulador
}, {})

console.log(total)
