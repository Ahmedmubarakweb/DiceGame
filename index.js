//creat random number for img1
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
//creat random number for img tow
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2+1);
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
console.log("player 2  "+randomNumber2);
console.log("player 1  "+randomNumber1);

if(randomNumber1>randomNumber2)
	document.querySelector("h1").innerHTML="player 1 is Winner";
else if(randomNumber1==randomNumber2)
	document.querySelector("h1").innerHTML="there are no winner";
else 
		document.querySelector("h1").innerHTML="player 2 is Winner";
