const brandInput = document.querySelector('#brand')

brandInput.addEventListener('keypress', (e) => {
  if (!checkChar(e)) {
    e.preventDefault()
  }
})

const checkChar = (e) => {
  const char = String.fromCharCode(e.keyCode)

  if (char.match(/[0-9,]/)) {
    console.log(char)
    return true
  }
}
