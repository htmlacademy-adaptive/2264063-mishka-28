const pageHeader = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burgerButton = document.querySelector('.burger')
const orderButton = document.querySelector('.popular-product__button')
const modal = document.querySelector('.modal') || null

const burgerButtonHandler = (e) => {
  e.currentTarget.classList.toggle('burger--active')
  nav.classList.toggle('nav--active')
}

const orderButtonHandler = () => {
  if (modal) modal.classList.add('modal--active')
}

pageHeader.classList.remove('header--nojs')

burgerButton.addEventListener('click', burgerButtonHandler)

if (orderButton)
  orderButton.addEventListener('click', orderButtonHandler)

if (modal)
  modal.addEventListener('mousedown', (e) => {
    e.target.classList.remove('modal--active')
  })
