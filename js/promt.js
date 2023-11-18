// prompt
/*
var name = prompt("What's your name?");
console.log("Hello " + name);
*/

// confirm
/*
var likesCats = confirm("Do you likes cats?");
if (likesCats) {
  console.log("You are cool cat!");
} else {
  console.log("Yeah, that's fine. You're still cool!");
}
*/

// alert
/*
alert("JavaScript is awesome!");
*/

// pseudo-code
/*
Pick a random word (Виберіть навмання слово)

While the word has not been guessed (Поки слово не вгадали) {
  Show the player their current progress (Показати гравцеві їхній поточний прогрес)
  Get a guess from the player (Отримайте припущення від гравця)

  If the player wants to quit the game {
    Quit the game
  }
  Else if the guess is not a single letter (Інакше, якщо відгадка не одна буква) {
    Tell the player to pick a single letter (Скажіть гравцеві вибрати одну букву)
  }
  Else {
    If the guess is in the word (Якщо відгадка в слові) {
      Update the player's progress with the guess (Оновіть прогрес гравця за допомогою припущення)
    }
  }
}

Congratulate the player on guessing the word (Привітайте гравця з вгадуванням слова)
*/

// #1: Choose random word
var words = ["javascript", "monkey", "amazing", "pancake"];
var word = words[Math.floor(Math.random() * words.length)];

// #2: Create an array of answers
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

// #3: Coding game

while (remainingLetters > 0) {
  // Game code goes here
  // Show the player their progress
  // Take input from the player
  // Update answerArray and remainingLetters
  // for every correct guess
}

// #3.1: Show player's progress
alert(answerArray.join(" "));

// #3.2: React to the data entered by the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
  break;
} else if (guess.length !== 1) {
  alert("Please enter a single letter.");
} else {
  // Update the game state with the guess
}