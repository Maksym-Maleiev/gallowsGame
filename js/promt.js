// prompt
var name = prompt("What's your name?");
console.log("Hello " + name);

// confirm
var likesCats = confirm("Do you likes cats?");
if (likesCats) {
  console.log("You are cool cat!");
} else {
  console.log("Yeah, that's fine. You're still cool!");
}

// alert
alert("JavaScript is awesome!");

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