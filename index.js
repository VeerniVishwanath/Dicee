// Alerts user once
var alerted = localStorage.getItem("alerted") || "";
if (alerted != "yes") {
  alert("Refesh page to Retry");
  localStorage.setItem("alerted", "yes");
}
// Generate Random Numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Update the Dice
var img1 = `images/dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src", img1);

var img2 = `images/dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src", img2);

// Check the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
