const cpfDosAprovados = `CPF dos aprovados:
  - 600.567.890-12
  - 765.998.345-23 ...`

// extrair os cpfs:
console.log(cpfDosAprovados.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))
