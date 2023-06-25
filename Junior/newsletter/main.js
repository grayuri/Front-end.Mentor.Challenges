const form = document.querySelector('form')
const inputLabel = document.querySelector('.input-labels')
const buttonSubmit = document.querySelector('#buttonSubmit')
const inputEmail = document.querySelector('#email')
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const userEmailSpan = document.querySelector('#userEmailSpan')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInput()
})

function putName(name) {
  userEmailSpan.textContent = name;
}

function checkInput() {
  if (!emailRegex.test(inputEmail.value)) {
    inputLabel.classList.add('error')
  }
  else {
    inputLabel.classList.remove('error')
    window.location.href = 'sucess.html'
    putName(inputEmail.value)
  }
}
