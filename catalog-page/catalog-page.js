const dropDownBtn = document.querySelector('.product-box-navigation__form-dropdown_btn')
const dropDown = document.querySelector('.dropdown')

dropDownBtn.addEventListener('click', function() {
	dropDown.classList.toggle('open')
})


const a = document.querySelector('.dropdown')
const b = document.querySelector('.product-box-navigation__form-dropdown_text')

a.addEventListener('click', function(e) {
	let content = e.target.innerText
	b.innerText = content
	dropDown.classList.remove('open')

})

 



