// https://viacep.com.br/

const submitButton = document.querySelector('#app form button')
const zipCodeField = document.querySelector('#app form input')
const content = document.querySelector('#app main')

submitButton.addEventListener('click', (event) => {
  event.preventDefault()

  let zipCode = zipCodeField.value

  zipCode = zipCode.replace(/[^\d]/g, '')

  axios
    .get(`https://viacep.com.br/ws/${zipCode}/json`)
    .then((res) => {
      if (res.data.erro) {
        throw new Error('CEP inválido')
      }

      content.innerHTML = ''

      createLine(res.data.logradouro)
      createLine(`${res.data.localidade} / ${res.data.uf}`)
    })
    .catch((err) => {
      content.innerHTML = ''

      createLine('Ops, algo deu errado!')
    })
})

const createLine = (data) => {
  const line = document.createElement('p')
  const text = document.createTextNode(data)

  line.appendChild(text)
  content.appendChild(line)
}
