// var tonePlaying = false;
var volume = 0.5; //Must be between 0.0 and 1.0

//Global Constants
const clueHoldTime = 1000; //How long to pause in between clues
const cluePauseTime = 333; //How long to pause in between clues
const nextClueWaitTime = 1000; //How long to wait before starting playback of clue sequence
const patternLength = 4;

//Global Variables
var pattern = []; //Empty pattern, to be filled randomly
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var lives = 3; //Established number of lives
var continuePlay = false; //Tracks the control of play based on guesses

//Generates a random set of buttons for a sequence, length denoted by patternLength
function patternGenerator() {
  var tempValue;
  for (let i = 0; i <= patternLength; i++) {
    //Generates a value from 1 to 4
    tempValue = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    console.log("number added to pattern:" + tempValue);
    pattern[i] = tempValue;
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  lives = 3;
  gamePlaying = true;
  //Fills out randomly generated pattern for gameplay
  patternGenerator();

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();
}

//Ends game and updates visible buttons
function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Function for adding light status to a button, takes target button as parameter
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

//Function clears light status of a button, takes target button as parameter
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//Plays single button clue, takes target button as a parameter
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//Plays a sequence of button clues via for loop
function playClueSequence() {
  guessCounter = 0;

  let delay = nextClueWaitTime; //Sets delay to intial wait time

  for (let i = 0; i <= progress; i++) {
    //For each clue that is played so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //Sets a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//Function which allerts the user that they have lost the game
//Calls stopGame to end the game
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//Function which allerts the user that they have lost the game
//Calls stopGame to end the game
function winGame() {
  stopGame();
  alert("Congratulations! You win!");
}

//Updates lives value when guess is determined to be wrong
//When the player runs out of lives, the game is ended and loseGame is called
function guessWrong() {
  lives = lives - 1;
  if (lives == 0) {
    continuePlay = false;
    loseGame();
  } else {
    alert("Whoops, try again. One life lost.\nLives left: " + lives);
    continuePlay = true;
  }
}

//Determines if user guesses are correct and continues play based on correctness
//For each wrong answer the lives counter is updated
//continuePlay keeps track of need to continue the sequence
//Progress keeps track of where in the sequence the user is
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess is correct
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //User has guess all correctly
        winGame();
      } else if (progress != pattern.length - 1) {
        //User has not yet guessed all correctly
        progress++;
        //Continue play

        continuePlay = true;
      }
    } else {
      guessCounter++;
    }
  } else {
    //Guess was incorrect,
    guessWrong();
  }

  if (continuePlay) {
    playClueSequence();
    continuePlay = false;
  }
}
