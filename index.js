const searchBtn = document.querySelector('.search-media__search')
const searchArea = document.querySelector('.search-area')
const searchAreaClose = document.querySelector('.search-area__close')

searchBtn.addEventListener('click', function() {
	searchArea.classList.add('open')
})

searchAreaClose.addEventListener('click', function() {
	searchArea.classList.remove('open')
})
