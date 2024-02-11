const input = document.querySelector('.input')
const closeBtn = document.querySelector('.close-btn')
const subBtn = document.querySelector('.subscribe-btn')
const error = document.querySelector('.error')
const container = document.querySelector('.container')
const thanksCard = document.querySelector('.thanks-card')

const checkEmail = () => {
	if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/i)) {
		error.style.display = 'block'
        input.style.borderColor = 'tomato'
	} else {
        container.classList.remove('lg:flex')
        container.classList.add('hidden')
		thanksCard.style.display = 'block'
        input.style.borderColor = ''
	}
}

const reset = () => {
    container.classList.remove('hidden')
    container.classList.add('lg:flex')
	thanksCard.style.display = 'none'
    error.style.display = 'none'
    input.value = ''
}

subBtn.addEventListener('click', checkEmail)
closeBtn.addEventListener('click', reset)
