// import functions and grab DOM elements
import { translateToAYes } from './translateToAYes.js';
const quizButton = document.querySelector('.quizButton');
const results = document.querySelector('.results');
// initialize state
 
quizButton.addEventListener('click', () => {
// set event listeners to update state and DOM
    let score = 0;
    let stalker;
    const username = prompt('okay, what is your name?');
    const testConfirm = confirm(`ready for a quiz, ${username}?`);
    if (!testConfirm) {
        return;
    }
    const hometown = prompt('Did I grow up in Walla Walla?');
    if (!hometown) {
        return;
    } else if (translateToAYes(!hometown)) {
        score ++;
    }
    // const feetToYard = prompt('How many ft in a yrd?');
    // if (!feetToYard) {
    //     return;
    // }
    // if (translateToAYes(feetToYard)) {
    //     score ++;
    // }
    // const captainWhidbey = prompt('Have I been to Captain Whidbeys?');
    // if (!captainWhidbey) {
    //     return;
    // }
    // if (translateToAYes(!hometown)) {
    //     score ++;
    // }
    // console.log(score);

    // if (score >= 2) {
    //     return stalker = 'Thanks for getting to know me!';
    // } else if (score === 1 || score === 0) {
    //     return stalker = 'you can do better than that!';
    //}

    results.textContent = `Nice job ${username}! You got ${score} out of 3 questions correct! ${stalker} `;
});
