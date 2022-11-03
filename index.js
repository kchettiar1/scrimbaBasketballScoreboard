let homeScore = 0;
let guestScore = 0;

let guestScoreEl = document.getElementById('guest-score');
let homeScoreEl = document.getElementById('home-score');



// * Home Score
function homePlusOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homePlusTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// * Guest Score
function guestPlusOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function guestPlusTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function guestPlusThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function newGameReset() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}

let scoreLeader = document.querySelectorAll('.team-score');



