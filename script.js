const questions = [
    {
        question: "According to Eric Ries, a startup is a human institution designated to create new products and services under what condition?",
        options: ["Guaranteed profitability", "Complete certainty", "A well-defined market", "Extreme uncertainty"],
        correctAnswer: 3
    },
    {
        question: "What is the first and central stage in the 'Design Thinking' process?",
        options: ["Prototype", "Ideate", "Empathy", "Test"],
        correctAnswer: 2
    }
    // PASTE MORE QUESTIONS HERE in the same format
];

// --- Rest of the code (no need to change) ---
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const showAnswerBtn = document.getElementById('show-answer-btn');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    optionsContainerEl.innerHTML = '';
    showAnswerBtn.style.display = 'inline-block';
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainerEl.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const optionButtons = optionsContainerEl.children;
    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[correctIndex].classList.add('correct');
    }
    Array.from(optionButtons).forEach(button => button.disabled = true);
    showAnswerBtn.style.display = 'none';
}

function showAnswer() {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const optionButtons = optionsContainerEl.children;
    optionButtons[correctIndex].classList.add('correct');
    Array.from(optionButtons).forEach(button => button.disabled = true);
    showAnswerBtn.style.display = 'none';
}

function showFinalScore() {
    quizContainer.innerHTML = `
        <h1>Quiz Complete!</h1>
        <p>Your final score is ${score} out of ${questions.length}.</p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

showAnswerBtn.addEventListener('click', showAnswer);
loadQuestion();
