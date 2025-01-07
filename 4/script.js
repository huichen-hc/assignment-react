const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

//DOM Level 0 Event Handlers on Button 2
const button2 = document.getElementById("button2");
button2.onclick = function(){
  alert("Button2 is clicked!")
};

//DOM Level 2 Event Listeners on Button 3
const button3 = document.getElementById("button3");
button3.addEventListener("click",function(event){
  alert("Button3 is clicked!")
});

//Event Delegation on Button 4 and 5
buttonChildContainer.addEventListener("click",function(event){
  alert(`${event.target.textContent} is clicked!`);
});
