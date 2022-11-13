const palavras = ['oi', 'parabens', 'paralelepipido']

const total = palavras.reduce((maiorPalavra, palavra) => {
  if (palavra.length > maiorPalavra.length) {
    return palavra
  }
  return maiorPalavra
}, '')

console.log(total)
