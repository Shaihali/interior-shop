const dropDownBtn = document.querySelector('.product-box-navigation__form-dropdown_btn')
const dropDown = document.querySelector('.dropdown')

dropDownBtn.addEventListener('click', function() {
	dropDown.classList.toggle('open')
})