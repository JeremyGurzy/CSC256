// Pokémon data array: name and image path, figured that JS arrays could be the same as other languages so I set it up this way
var arrPokemonData = [
    { name: "Squirtle", image: "squirtle.jpg" },
    { name: "Charmander", image: "charmander.jpg" },
    { name: "Bulbasaur", image: "bulbasaur.jpg" }
];

// Get the image element where the Pokémon image will be displayed
var pokemonImage = document.getElementById("pokemon");

// Get all the buttons used for selecting the names
var buttons = document.querySelectorAll(".choiceButton");

// Keep track of the current Pokémon
var currentPokemon = 0;
// Keep track of the score
var score = 0;
// Pointer set to the scoreboard
var scoreBoard = document.getElementById("spnScore");


// Function to initialize the game
function startGame() {

    // Hide the start game button
    document.getElementById("startGameButton").style.display = "none";

    // Show the buttons for the game
    document.querySelector(".buttons").style.display = "flex";

    // Reset the scoreboard
    scoreBoard.innerHTML = 0;

    // Reset the score back to 0
    score = 0;

    // Set up the first Pokémon
    currentPokemon = 0;

    // Load the next Pokémon
    nextPokemon();
}


// Function to start the game and load the current Pokémon
function nextPokemon() {

    // Check if all Pokémon have been guessed
    if (currentPokemon >= arrPokemonData.length) {
        // Return end game function
        return endGame();
    }

    // Select the current Pokémon based on the currentPokemon 
    var currentData = arrPokemonData[currentPokemon];

    // Store the correct answer
    correctAnswer = currentData.name;

    // Update the image to the selected Pokémon
    pokemonImage.src = currentData.image;

    // Create an array to hold the button options
    var buttonNames = [correctAnswer];

    // While loop for adding the two incorrect options in the button names, making sure there are enough options for names
    while (buttonNames.length < buttons.length) {
        // Variable will randomly change the button names from the array
        var randomOption = arrPokemonData[Math.floor(Math.random() * arrPokemonData.length)].name;
        // If options is not present, then include it
        if (!buttonNames.includes(randomOption)) {
            // will add the randome option to the end of the array
            buttonNames.push(randomOption);
        }
    }

    // Assign the randomized options to the buttons, pokedex is fitting name because that stores all pokemon in the actual show and game
    buttons.forEach((button, pokedex) => {
        // Set the text content of the buttons to the names in the array
        button.textContent = buttonNames[pokedex];
        // Add click event listener, had to do this way because if I did the syntax .addEventListener, the game would loop consistently after the second choice
        button.onclick = () => checkAnswer(button.textContent);
    });
}

// Function to check if the clicked answer is correct
function checkAnswer(selectedAnswer) {
    if (selectedAnswer == correctAnswer) {
        // Update score and current pokemon by 1
        score++;
        currentPokemon++;
        // Alert the user they got the right answer
        alert("Correct! It\'s " + correctAnswer + "!");
        // Update the scoreboard
        scoreBoard.innerHTML = score;
    }
    //else for IF the answer is wrong
    else {
        // Alert the user the answer was incorrect
        alert("Incorrect! Try again.");
    }

    // Move to the next Pokémon after the answer is checked
    nextPokemon();
}

// Function to end the game and display the final score
function endGame() {
    alert("You have finished the game! Your score is: " + score + " out of " + arrPokemonData.length + "!");
}

 // Set up event listener for the Start Game button
document.getElementById("startGameButton").addEventListener("click", startGame);