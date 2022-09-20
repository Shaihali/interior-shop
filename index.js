const searchBtn = document.querySelector('.search-media__search')
const searchArea = document.querySelector('.search-area')
const searchAreaClose = document.querySelector('.search-area__close')
const menuBtn = document.querySelector('.menu')
const form = document.querySelector('.search-area__form')
const navlistShow = document.querySelector('.nav-list')
const basketBtn = document.querySelector('.basket-btn')

searchBtn.addEventListener('click', function() {
	searchArea.classList.add('open')
	navlistShow.classList.remove('open')
})

searchAreaClose.addEventListener('click', function() {
	searchArea.classList.remove('open')
	form.classList.remove('close')
})

menuBtn.addEventListener('click', function() {
	searchArea.classList.add('open')
	navlistShow.classList.add('open')
	form.classList.add('close')

})

basketBtn.addEventListener('click', function() {
	// window.open('https://qna.habr.com/')
	window.location.href = ('file:///C:/Users/79898/OneDrive/Рабочий стол/interior-shop/index.html')
})
