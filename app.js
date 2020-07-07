// import functions and grab DOM elements
const quizButton = document.querySelector('.quizButton')
// initialize state
 
quizButton.addEventListener('click', () => {
// set event listeners to update state and DOM
    const username = prompt('okay, what is your name?')
    prompt(`want to take a quiz, ${username}?`)  
    confirm('are you sure, no turning back?')
    prompt('Did I grow up in Walla Walla?')
    prompt('How many ft in a yrd?')
})