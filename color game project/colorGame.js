var numSquares=6;
var colors= generateRandom(6);/*["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 0)"];*/
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector(".displayColor");
colorDisplay.textContent=pickedColor;
var displayMessage=document.querySelector("#message");
var h1=document.querySelector("h1");
var buttonReset=document.querySelector(".reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
//easy mode

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares=3;
	colors= generateRandom(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

});
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors= generateRandom(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
	}

});
//Reset code
buttonReset.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandom(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colordisplay to same as picked color
	colorDisplay.textContent=pickedColor;
	//Reflecting colors on squaresrgb(51, 153, 255)
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i]; 
	}
      h1.style.backgroundColor="rgb(51, 153, 255)";
       displayMessage.textContent="";
        this.textContent="NEW COLORS";
        //or buttonReset.tectContent
});

for(var i=0;i<squares.length;i++)
{
	//add initial colors
   squares[i].style.backgroundColor=colors[i];
   //add click listeners to squares
   squares[i].addEventListener("click",function(){
   	var clickedColor=this.style.backgroundColor;
   	if(clickedColor===pickedColor)
   	{
       /*for(i=0;i<squares.length;i++)
       {
       	  squares[i].style.backgroundColor=colors[3];
       }*/
       changeColor(clickedColor);
       displayMessage.textContent="Correct";
        displayMessage.classList.remove("wrong");
       displayMessage.classList.add("correct");
       h1.style.backgroundColor=clickedColor;
       buttonReset.textContent="Play again";
   	}
   	else{
       this.style.backgroundColor="#232323";
       displayMessage.textContent="Try again";
       displayMessage.classList.remove("correct");
       displayMessage.classList.add("wrong");
}
   	
   });

}
function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}

}
function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandom(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		//Get random color and push it into the array
      arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g +", "+ b+")";

}