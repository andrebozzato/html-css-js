interface Veiculo {
  rodas: number
  acelerar: () => void
  frear?: () => void
}

// extends
interface Moto extends Veiculo {
  capacete?: boolean
  empinar?: () => void
}

let bross: Moto

// implements
class CriarVeiculo implements Veiculo {
  rodas: number

  constructor(rodas: number) {
    this.rodas = rodas
  }

  acelerar() {
    console.log('qulquer coisa')
  }
}
