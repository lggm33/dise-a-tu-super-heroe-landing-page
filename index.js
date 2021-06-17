const modal = document.querySelector('.modal')
const button = document.querySelectorAll('.button')
const closeImg = document.querySelector('.modal__content-close')

const buttons = [...button]
buttons.forEach(but => but.addEventListener('click', () => {
  modal.classList.remove('hidden')
  modal.classList.add('visible')
}))

closeImg.addEventListener('click', () => {
  modal.classList.remove('visible')
  modal.classList.add('hidden')
})
