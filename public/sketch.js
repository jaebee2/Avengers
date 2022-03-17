const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ',
    answers: [
      { text: '2005', correct: false },
      { text: '2008', correct: true },
      { text: '2010', correct: false },
      { text: '2012', correct: false },
    ]
  },
  {
    question: 'What is the name of Thor’s hammer?',
    answers: [
      { text: 'Vanir', correct: false },
      { text: 'Mjolnier', correct: true },
      { text: 'Stormbreaker', correct: false },
      { text: 'Odinsward', correct: false }
    ]
  },
  {
    question: 'In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?',
    answers: [
      { text: 'That he wants to study The Hulk', correct: false },
      { text: 'That he knows about S.H.I.E.L.D', correct: false },
      { text: 'That they are putting a team together', correct: true },
      { text: 'That Thaddeus owes him money', correct: false }
    ]
  },
  {
    question: 'What is Captain America’s shield made of?',
    answers: [
      { text: 'Adamantium', correct: false },
      { text: 'Vibranium', correct: true },
      { text: 'Promethium', correct: false },
      { text: 'Carbonadium', correct: false },
    ]
  },
  {
    question: 'The Flerkens are a race of extremely dangerous aliens that resembles what?',
    answers: [
      { text: 'Cats', correct: true },
      { text: 'Ducks', correct: false },
      { text: 'Reptiles', correct: false },
      { text: 'Raccoons', correct: false },
    ]
  },
  {
    question: 'In the first avengers film, what was the name Tony Stark gave to Thor?',
    answers: [
      { text: 'God of Thunder', correct: false },
      { text: 'lightning God', correct: false},
      { text: 'Asgardian', correct: false },
      { text: 'Point Break', correct: true },
    ]
  },
  {
    question: 'What is the real name of the Black Panther?',
    answers: [
      { text: '•	N’Jobu', correct: false },
      { text: 'M’Baku', correct: false},
      { text: 'N’Jadaka', correct: false },
      { text: 'T’Challa ', correct: true },
    ]
  },
  {
    question: 'What is the alien race Loki sends to invade Earth in The Avengers?',
    answers: [
      { text: 'The Giants Frost', correct: false },
      { text: 'The Chitauri', correct: true},
      { text: 'Asgardians', correct: false },
      { text: 'The Skrulls ', correct: false },
    ]
  },
  {
    question: 'Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?',
    answers: [
      { text: 'Thor', correct: false },
      { text: 'Loki', correct: true},
      { text: 'Doctor Strange', correct: false },
      { text: 'Vision', correct: false },
    ]
  },
  {
    question: 'What race of beings is loki from?',
    answers: [
      { text: 'Dark elves', correct: false },
      { text: 'Asgardian', correct: false},
      { text: 'Gods', correct: false },
      { text: 'Frost Giants', correct: true },
    ]
  }
]