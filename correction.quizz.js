const questions = [
    {
        "subject": "En PROG1, que fait slice ?",
        "choices": [
            "Ca decoupe un tableau d'un index de debut a un index de fin",
            "Ca efface un element du tableau",
            "Ca ajoute un element au tableau",
            "Ca trie un tableau"
        ],
        "correctIndex": 0
    }
]
/**
 * Displays a single question object into the DOM.
 * 
 * @param {object} question - an object with the following keys:
 * subject (the question itself), choices (an array of strings),
 * correctIndex (the index of the correct answer in choices)
 */
const showQuestion = (question) => {
    const buttons = document.querySelectorAll('.grid .response');
    const h2 = document.querySelector('#question');

    h2.textContent = question.subject;
    buttons.forEach((button, index) => {
        button.textContent = question.choices[index];
    })
}

const showNextQuestion = () => {

}