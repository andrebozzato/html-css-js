// tipo void - mais usado em função que não retorna nada
function showInformation(): void {
  console.log('usando void')
}

// tipo void com promise
async function showInformationPromise(): Promise<void> {
  let milliseconds: number = 4000
  setTimeout(
    () => console.log(`usando void após ${milliseconds / 1000} segundos`),
    milliseconds
  )
}

// tipando parametros de funções
function showInformation2(name: string = 'Andre Bozzato'): void {
  console.log(name)
}

showInformation(), showInformation2(), showInformationPromise()

// never
function error(): never {
  throw new Error('error')
}
