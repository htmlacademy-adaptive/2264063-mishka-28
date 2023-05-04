const pageHeader = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burgerButton = document.querySelector('.burger')
const orderButton = document.querySelector('.popular-product__button')
const modal = document.querySelector('.modal') || null
const cartButton = document.querySelectorAll('.card__button')
const body = document.querySelector('.page__body')
const contactsMap = document.querySelector('.contacts__map-wrapper')

const burgerButtonHandler = (e) => {
  e.currentTarget.classList.toggle('burger--active')
  nav.classList.toggle('nav--active')
}

const orderButtonHandler = () => {
  if (modal) modal.classList.add('modal--active')
  body.classList.add('page__body--locked')
}

pageHeader.classList.remove('header--nojs')

if (contactsMap) {
  contactsMap.classList.remove('contacts__map-wrapper--nojs')
}

burgerButton.addEventListener('click', burgerButtonHandler)

if (orderButton)
  orderButton.addEventListener('click', orderButtonHandler)

if (modal)
  modal.addEventListener('mousedown', (e) => {
    e.target.classList.remove('modal--active')
    if (e.target.classList.contains('modal')) {
      body.classList.remove('page__body--locked')
    }
  })

cartButton.forEach(button => {
  button.addEventListener('click', orderButtonHandler)
})
