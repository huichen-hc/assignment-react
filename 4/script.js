const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

//DOM Level 0 Event Handlers on Button 2
const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Button2 is clicked!");
};

//DOM Level 2 Event Listeners on Button 3
const button3 = document.getElementById("button3");
button3.addEventListener("click", function (event) {
  alert("Button3 is clicked!");
});

//Add event delegation on button 4 and 5 and prevent event propagation on button 4,5.
buttonChildContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert(`${event.target.textContent} is clicked!`);
    event.stopPropagation();
  } else {
    alert("Child container clicked!");
  }
});

//Prevent event propagation on button 1,2,3.
const buttons = document.querySelectorAll("#button1, #button2, #button3");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
