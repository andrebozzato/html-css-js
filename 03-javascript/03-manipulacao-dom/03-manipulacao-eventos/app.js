const hello = () => alert('Hello World!')

const button = document.querySelector('#app button')
const input = document.querySelector('#app input#idade')

button.addEventListener('click', (event) => {
  event.preventDefault()

  alert(`sua idade é ${input.value}`)
})
