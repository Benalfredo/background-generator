var css = document.querySelector("h3");
// select class .color
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//function myFunction()  {
    //var color1 = {value: "rgb(255, 0, 0)"};
   // var color2 = {value: "rgb(255, 255, 0)"};
    //body.style.background =
	//"linear-gradient(to right, "
	//+ color1.value
	//+ ", "
	//+ color2.value
	//+ ")";
//
	//css.textContent = body.style.background + ";";
//
//}

console.log(color1.value);
function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);