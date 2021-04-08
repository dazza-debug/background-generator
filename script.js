var css = document.querySelector("h3");
var colour1 = document.querySelector(".color1");
var colour2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

console.log(button);

function setGradient(){
	body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";

	css.textContent = body.style.background + ";";
}

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	colour1.value = "#" + randomColor;
	randomColor = Math.floor(Math.random()*16777215).toString(16);
	colour2.value = "#" + randomColor;
	setGradient();
});


setGradient();

