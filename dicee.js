var randomNumber1= (Math.random()*6)+1;
var randomDice1 = Math.trunc(randomNumber1);
var imgSrc1 = "images/dice"+randomDice1+".png";

var randomNumber2= (Math.random()*6)+1;
var randomDice2 = Math.trunc(randomNumber2);
var imgSrc2 = "images/dice"+randomDice2+".png";

document.querySelector(".img1").setAttribute("src", imgSrc1);
document.querySelector(".img2").setAttribute("src", imgSrc2);

if (randomDice1>randomDice2){
  document.querySelector(".container h1").innerText="🚩 Player 1 wins";
}
else if(randomDice1<randomDice2){
  document.querySelector(".container h1").innerText="Player 2 wins 🚩";
}
else{
  document.querySelector(".container h1").innerText="Draw again!";
}
