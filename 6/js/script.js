const $nav = document.querySelector('.nav')
const $burgerButton = document.querySelector('.burger')

const burgerButtonHandler = (e) => {
  e.currentTarget.classList.toggle('burger--active')
  $nav.classList.toggle('nav--active')
}

$nav.classList.remove('nav--nojs')

$burgerButton.addEventListener('click', burgerButtonHandler)
