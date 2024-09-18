const questions = [
  {
    question: "What is Pakistan's national fruit?",
    options: ["Mango", "Apple", "Banana", "Orange"],
    answer: "Mango"
  },
  {
    question: "What is the most popular snack in Pakistan?",
    options: ["Samosa", "Burger", "Pizza", "Pasta"],
    answer: "Samosa"
  },
  {
    question: "Which city is known as the 'City of Lights'?",
    options: ["Lahore", "Islamabad", "Karachi", "Quetta"],
    answer: "Karachi"
  },
  {
    question: "Who is the famous fictional character known for saying 'Chitti aayi hai'? ",
    options: ["Mola Jatt", "Billo", "Noori Nath", "Munna Bhai"],
    answer: "Noori Nath"
  },
  {
    question: "Which Pakistani food is considered a 'national dish'?",
    options: ["Nihari", "Biryani", "Pulao", "Karahi"],
    answer: "Biryani"
  },
  {
    question: "Which Pakistani city is famous for its Gol Gappay?",
    options: ["Multan", "Lahore", "Peshawar", "Hyderabad"],
    answer: "Lahore"
  },
  {
    question: "What is the national animal of Pakistan?",
    options: ["Markhor", "Lion", "Elephant", "Horse"],
    answer: "Markhor"
  },
  {
    question: "Which Pakistani city is famous for truck art?",
    options: ["Rawalpindi", "Quetta", "Peshawar", "Karachi"],
    answer: "Peshawar"
  },
  {
    question: "What is Pakistan’s national drink?",
    options: ["Lassi", "Tea", "Rooh Afza", "Sugarcane Juice"],
    answer: "Sugarcane Juice"
  },
  {
    question: "Which Pakistani city is known as 'Mini Pakistan'?",
    options: ["Karachi", "Faisalabad", "Lahore", "Islamabad"],
    answer: "Karachi"
  },
  {
    question: "Which day is celebrated as Pakistan's Independence Day?",
    options: ["14th August", "23rd March", "6th September", "25th December"],
    answer: "14th August"
  },
  {
    question: "Which province is famous for its Chapli Kebab?",
    options: ["Sindh", "Balochistan", "Punjab", "Khyber Pakhtunkhwa"],
    answer: "Khyber Pakhtunkhwa"
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["Urdu", "Punjabi", "Sindhi", "Pashto"],
    answer: "Urdu"
  },
  {
    question: "Which Pakistani actress starred in the drama 'Humsafar'?",
    options: ["Mahira Khan", "Sajal Aly", "Mehwish Hayat", "Ayeza Khan"],
    answer: "Mahira Khan"
  },
  {
    question: "Which Pakistani city is famous for its Basant festival?",
    options: ["Karachi", "Lahore", "Faisalabad", "Islamabad"],
    answer: "Lahore"
  },
  {
    question: "What is Pakistan's national sport?",
    options: ["Cricket", "Football", "Hockey", "Kabaddi"],
    answer: "Hockey"
  },
  {
    question: "Which Pakistani singer is known for 'Afreen Afreen'?",
    options: ["Nusrat Fateh Ali Khan", "Atif Aslam", "Ali Zafar", "Rahat Fateh Ali Khan"],
    answer: "Nusrat Fateh Ali Khan"
  },
  {
    question: "What is the tallest mountain in Pakistan?",
    options: ["Nanga Parbat", "K2", "Broad Peak", "Rakaposhi"],
    answer: "K2"
  },
  {
    question: "Which Pakistani dessert is known as 'Queen of Sweets'?",
    options: ["Kheer", "Jalebi", "Gulab Jamun", "Ras Malai"],
    answer: "Gulab Jamun"
  },
  {
    question: "What is Pakistan's national flower?",
    options: ["Rose", "Sunflower", "Jasmine", "Tulip"],
    answer: "Jasmine"
  }
];

const questionElement = document.querySelector('.questions p');
const optionButtons = document.querySelectorAll(".options .option");
const nextButton = document.querySelector(".next-btn button");
const scoreModal = document.getElementById("scoreModal");
const scoreText = document.getElementById("scoreText");
const restartButton = document.getElementById("restartButton");



// style for restart button 
restartButton.style.backgroundColor = "#000";
restartButton.style.color = '#fff';
restartButton.style.borderRadius = '10px';
restartButton.style.cursor = 'pointer';




let currentQuestionIndex = 0;
let score = 0; // Track the score
displayQuestion(currentQuestionIndex);

function displayQuestion(index) {
  const currentQuestion = questions[index];
  questionElement.textContent = currentQuestion.question;

  optionButtons.forEach((button, i) => {
    button.textContent = currentQuestion.options[i];
    button.disabled = false;
    button.style.backgroundColor = ''; 
  });
}

// Handle option click and update score
function handleOptionClick(event) {
  const selectedOption = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) {
    event.target.style.backgroundColor = '#a6d498'; 
    score++; // Increment score for correct answer
  } else {
    event.target.style.backgroundColor = '#ed948c'; 

    optionButtons.forEach(button => {
      if (button.textContent === correctAnswer) {
        button.style.backgroundColor = '#a6d498';
      }
    });
  }

  optionButtons.forEach(button => {
    button.disabled = true;
  });
}

optionButtons.forEach(button => {
  button.addEventListener('click', handleOptionClick);
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    showScoreModal(); // Show final score
  }
});

// Show modal with the final score
function showScoreModal() {
  scoreText.textContent = `Your score is: ${score} out of ${questions.length}`;
  scoreText.style.color = '#000';
  scoreText.style.fontWeight = 'bold';
  scoreModal.style.display = "flex"; // Show the modal
}

// Restart the quiz
restartButton.addEventListener("click", () => {
  scoreModal.style.display = "none"; // Hide the modal
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion(currentQuestionIndex);
});
