var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = `images/dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src", img1);

var img2 = `images/dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src", img2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML =
    '<img style="width: 7%; margin: auto 30px;" src="images/flag.png"></img>Player 1 Wins!';
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML =
    'Player 2 Wins!<img style="width: 7%; margin: auto 30px;" src="images/flag.png"></img>';
}
