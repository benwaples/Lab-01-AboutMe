export function translateToAYes(answer) {
    const stringAnswer = answer.toString;
    const firstLetter = stringAnswer.charAt(0);
    const fixedAnswer = firstLetter.toLowerCase();
    if (fixedAnswer === 'y') {
        return true;
    } else {
        return false;
    }
}


