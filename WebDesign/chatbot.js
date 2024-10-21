let questions = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: {
            a: "France",
            b: "Brazil",
            c: "Germany"
        },
        correctAnswer: "a",
        correctResponse: "Correct! France won the FIFA World Cup in 2018.",
        incorrectResponse: "Incorrect! The correct answer is France."
    },
    {
        question: "Who won the UEFA Champions League in 2021?",
        options: {
            a: "Chelsea",
            b: "Manchester City",
            c: "Real Madrid"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Chelsea won the UEFA Champions League in 2021.",
        incorrectResponse: "Incorrect! The correct answer is Chelsea."
    },
    {
        question: "Who is the all-time top goal scorer in the FIFA World Cup?",
        options: {
            a: "Pelé",
            b: "Lionel Messi",
            c: "Cristiano Ronaldo"
        },
        correctAnswer: "c",
        correctResponse: "Correct! Cristiano Ronaldo is the all-time top goal scorer in the FIFA World Cup.",
        incorrectResponse: "Incorrect! The correct answer is Cristiano Ronaldo."
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        options: {
            a: "Real Madrid",
            b: "FC Barcelona",
            c: "AC Milan"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Real Madrid has won the most UEFA Champions League titles.",
        incorrectResponse: "Incorrect! The correct answer is Real Madrid."
    },
    {
        question: "Who won the Ballon d'Or in 2020?",
        options: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Robert Lewandowski"
        },
        correctAnswer: "c",
        correctResponse: "Correct! Robert Lewandowski won the Ballon d'Or in 2020.",
        incorrectResponse: "Incorrect! The correct answer is Robert Lewandowski."
    }
    // Add more football questions as needed
];


let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    
    botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);

    // Append an empty div for a break line after each question
    chatContainer.appendChild(document.createElement("div"));

}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse = userInput.value.toLowerCase();
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    
    if (userResponse !== 'a' && userResponse !== 'b' && userResponse !== 'c') {
        userMessage.innerHTML = `<strong>Chatbot:</strong> Please enter a valid option (a, b, or c).`;
        chatContainer.appendChild(userMessage);
        userInput.value = ""; // Clear the input field
        return; // Exit the function
    }
    
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = "<strong>Chatbot:</strong> ";

    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        let finalMessage = document.createElement("div");
        finalMessage.classList.add("message");
        finalMessage.innerHTML = "<strong>Chatbot:</strong> You have completed the football quiz.";
        chatContainer.appendChild(finalMessage);
        chatForm.style.display = "none"; // Hide the input form
    }

    userInput.value = "";
});
