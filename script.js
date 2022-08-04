const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

// odpowiedzi umieszczone w tablicy
const answersArr = [
	'Tak',
	'Nie',
	'Możliwe',
	'Kto wie',
	'Zobaczmy co przyniesie czas',
	'Tego nikt nie wie',
	'Być może',
	'Nigdy',
	'Nie chcesz znać odpowiedzi na to pytanie...',
	'Ależ jak...',
]

// Funkcja, która odpala animację po kliknięciu na bilę

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}


//Funkcja, która sprawdza formularz

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
        
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie'
		answer.textContent = ''
	}

    ball.classList.remove('shake-animation')
}

// Funkcja, która generuje nam odpowiedzi z tablicy
const generateAnswer = () => {
	const number = Math.floor(Math.random() * answersArr.length) // przemienia w liczbę całkowitą oraz randomowo wybiera liczbę od 1-10
	answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)
