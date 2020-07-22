var numColors=6;
var colors=getRandomColor(numColors);
var boxes=document.getElementsByClassName("square");
var pickedColor=pickedColors();
var h1=document.getElementById("xyz");
var headbox=document.getElementsByClassName("headbox");
var result=document.getElementById("result");
var button=document.getElementById("newInput");
var buttonEasy=document.getElementsByClassName("selectedEasy")[0];
var hardButton=document.querySelector("#hardButton");
var easy=document.getElementsByClassName("easy");
buttonEasy.addEventListener("click",function(){
	result.textContent="";
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numColors=3;
	colors=getRandomColor(numColors);
	pickedColor=pickedColors();
	h1.textContent=pickedColor;
for(var i=0;i<colors.length;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
	}
	headbox[0].style.backgroundColor="#4682B4";
	for(var i=0;i<easy.length;i++)
	{
		easy[i].style.display="none";
	}
});
hardButton.addEventListener("click",function(){
	result.textContent="";
	this.classList.add("selected");			
	buttonEasy.classList.remove("selected");
	numColors=6;
	colors=getRandomColor(numColors);
	pickedColor=pickedColors();
	h1.textContent=pickedColor;
	for(var i=0;i<easy.length;i++)
	{
		easy[i].style.display="block";
	}
for(var i=0;i<colors.length;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
	}
	headbox[0].style.backgroundColor="#4682B4";

});
button.addEventListener("click",function(){
	result.textContent="";
	button.textContent="NEW COLOR";
	colors=getRandomColor(numColors);
	pickedColor=pickedColors();
	h1.textContent=pickedColor;
	
	for(var i=0;i<colors.length;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
	}
	headbox[0].style.backgroundColor="#4682B4";
});
h1.textContent=pickedColor;
for(var i=0;i<boxes.length;i++)
{
	boxes[i].style.backgroundColor=colors[i];
	boxes[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		h1.textContent=clickedColor;
		
		if(clickedColor===pickedColor)
		{
				result.textContent="Correct!";
				 headbox[0].style.backgroundColor=clickedColor;
				allSameColor(clickedColor);
				button.textContent="Play Again??";
		 	}
		 	else{
		 		this.style.backgroundColor="#232323";
		 		result.textContent="Try Again!";
		 	}
		 });
		
}
function allSameColor(newColor)
{
	for(var i=0;i<boxes.length;i++)
	{
		boxes[i].style.backgroundColor=newColor;
	}
}
function pickedColors()
{
	var index=Math.floor(Math.random()*colors.length);
	return colors[index];
}
function getRandomColor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
	var x=Math.floor(Math.random()*256);
	var y=Math.floor(Math.random()*256);
	var z=Math.floor(Math.random()*256);
		arr[i]="rgb(" + x +", " + y +", " + z +")";
	}
return arr;
}


