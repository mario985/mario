var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h6");
var body = document.getElementById('imagine')
function colorPicker(){	body.style.background= "linear-gradient(to right, "+color1.value+","+color2.value+")";
}


color1.addEventListener("input" , function () {
colorPicker()
})
color2.addEventListener("input" , function () {
colorPicker()

})