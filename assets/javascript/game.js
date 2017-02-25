//hi?window.onload = function () {
	// Create alphabet table for the game.
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	// Guess the name of the artist & their song.
  var artists = ['Celeste Buckingham'.toLowerCase(),'Men At Work'.toLowerCase(),'Andy Grammer'.toLowerCase(),
  'Kenny Chesney'.toLowerCase(), 'Switchfoot'.toLowerCase()];
  var songs = ['Run run run', 'Down Under', 'Honey Im Good', 'American Kids', 
  'Gone'];
  var message = ['You win!','Game Over!'];

  // Tally number of attempts.
  var tallyCorrectGuesses = 0;
  var tallyWrongGuesses = 0;
  var tallyTotalAttempts = 0;  
  var lives = 3;
  var printCorrectAnswer = 0;
  

  // **** body of the hangman game **** //


  //var msgBox = document.getElementById('message');
  //var wordBox = document.getElementById('word-box');
  //wordBox.innerHTML = 'Letters Guessed: ';

  var random = artists[Math.round(Math.random() * (artists.length - 1))]; 
  console.log(random)
  // loop through the amount of guesses that a user is provided
  // need to let user keep playing until they fail total number of 'lives'
  var alphabet = new Array(random.length);
  // var artistRemainingLetters = removeSpaces(random); 

  msgBox.innerHTML = 'You have incorrected guesses left';
  
  // display to user
  while(lives > 0) {   
    var attemptedGuess = prompt('Guess a letter:').toLowerCase();
    if (letters.indexOf(attemptedGuess) > 0) {
	    alphabet.push(attemptedGuess) 
      console.log(alphabet);
    } else {
      console.log('Please enter a letter');
    }
    
// compare to see if random artist has the guessed letter & remove from remaining artistRemainingLetters
		if (random.indexOf(attemptedGuess) > -1) {
      console.log('Hey, the user guessed correctly (or entered an invalid char)! aw yea');
      artistRemainingLetters = removeLetter(artistRemainingLetters, attemptedGuess);
      console.log(artistRemainingLetters);
      
// Are any letters left to guess or has the user won/lost?
      if (artistRemainingLetters.length < 1) {
        console.log('You win! Congrats');
        msgBox.innerHTML = 'You win! Congrats';
        console.log('The artist was : ' + random);
        msgBox.innerHTML = 'The artist was : ' + random;
        break; // this ends the loop
      }
    } else {     
      // subtract a life if wrong
      console.log('Womp, womp - you guessed wrong');
      lives = lives - 1; // lives--
    }

  }
  showWinner();
}


function removeSpaces(word) {
  return word.split(" ").join('');
}

function removeLetter(band, letter) {
  return band.split(letter).join('');
}

function printUnderscores (amount) {
  var underScorePrintBox = document.getElementById('underscore-print-box');

  console.log(underScorePrintBox);
  console.log(amount)
  underScorePrintBox.innerHTML = "";
  for (i = 0; i < amount; i++) {
	// <tag>_ _ _ _ _ _ _</tag>
    underScorePrintBox.innerHTML = underScorePrintBox.innerHTML + "_ ";
  }
  // Print the letter the user has choosen.
  //$(amount).html(); 
  return amount;
}

// Print winner/loser message.
function showWinner() {
	if (lives <= 0) {
    window.arlert = 'Game Over';
    console.log('game over');
	}
	else {
    console.log('you win');
		window.arlert = 'You Win!';
  }
}


// **** Rough Draft **** //

//showLives.innerHTML = "You have " + lives + " lives";
// msgBox.innerHTML = 'Womp, womp - you guessed wrong & you have this many guesses left: ' + lives;


// Capture what user guesses. Save in a "neutral value" for re-use/comparison.
//   $('amount').on('click', function()){
//   	amount 
//   }
// 	document.getElementById(underScorePrintBox).innerHTML = artists.join("&nbsp;")
// // or would this be right to creat the space and attach to the array empty length?
// // create a for loop that will show either a letter or a dash depepending on the 
// // word chosen
// for (i = 0; i < amount; i++){
// 	if (currentWord[i]) 
// }

// 	str.split (artists)
  

// for (var i = 0; i < word.length; i++) {
//     underScorePrintBox[i] = "_";
//   }

// radomArtists = artist[Math.floor(Math.random() * artist.length)];


// guessInput = document.getElementById("alphabet");


// man.innerHTML =  + by + ' lives remaining';
// output.innerHTML = '';


// document.getElementById("alphabet").value = '';


// var alphabet, i;
// for (i = 0; i < randomArtists.length; i++) {
// 	letter = '<li class="letter letter' + radomArtists.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
//             letters.insertAdjacentHTML('beforeend', letter);
// }


// for (var i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       check();


// var attempetedGuesses = document.getElementById("attempetedGuesses");


// var artist = function () {
//     if (chosenCategory === artist[0]) {
//       catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
//     } else if (chosenCategory === artist[1]) {
//       catagoryName.innerHTML = "The Chosen Category Is Films";
//     } else if (chosenCategory === artist[2]) {
//       catagoryName.innerHTML = "The Chosen Category Is Cities";
//     }
//   }


// No longer needed.
// Let user guess/choose a letter.  
// function random () {
 //    artistList = artist (5);
 //    artist [0] = 'Celeste Buckingham';
 //    artist [1] = 'Men At Work';
 //    artist [2] = 'Andy Grammer';
 //    artist [3] = 'Kenny Chesney';
 //    artist [4] = 'Switchfoot';
    // }

