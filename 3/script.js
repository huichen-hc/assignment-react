// Change label texts
const nameLabel = document.getElementById("nameLabel");
nameLabel.textContent = "Name";

const emailLabel = document.getElementById("emailLabel");
emailLabel.textContent = "Email";

const phoneLabel = document.getElementById("phoneLabel");
phoneLabel.textContent = "Phone";

const msgLabel = document.getElementById("msgLabel");
msgLabel.textContent = "Message";

const optionsLabel = document.getElementById("optionsLabel");
optionsLabel.textContent = "Options:";

// Style the form
document.body.style.fontFamily = "Raleway";
document.body.style.backgroundColor = "#344a72";

const formContainer = document.getElementById("form-container");
formContainer.style.margin = "0 auto";
formContainer.style.maxWidth = "520px";
formContainer.style.paddingTop = "100px";

const form = document.querySelector("form");
form.style.backgroundColor = "#fff";
form.style.padding = "30px 45px";
form.style.borderRadius = "5px";

const formTitle = document.querySelector("h1");
formTitle.style.textAlign = "center";

const formGroups = document.querySelectorAll(".form-group");
formGroups.forEach(function(formGroup){
    formGroup.style.marginBottom = "2px";
});

const formLabels = document.querySelectorAll(".form-group label");
formLabels.forEach(function(formLabel){
    formLabel.style.display = "block";
    formLabel.style.paddingBottom = "5px";
})

const formInputs = document.querySelectorAll(".form-group input");
formInputs.forEach(function(formInput){
    formInput.style.display = "block";
    formInput.style.width = "100%";
    formInput.style.height = "30px";
    formInput.style.border = "1px solid #ccc";
    formInput.style.borderRadius = "5px";
})

const textArea = document.querySelector("textarea");
textArea.style.display = "block"
textArea.style.width = "100%";
textArea.style.border = "1px solid #ccc";
textArea.style.borderRadius = "5px";

//Style submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.style.width = "100%";
submitBtn.style.marginBottom = "20px";
submitBtn.style.backgroundColor = "#49c1a2";
submitBtn.style.padding = "8px";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "5px";
submitBtn.style.color = "#fff";

//Add hover function to the submit button
submitBtn.addEventListener("mouseover", function() {
    submitBtn.style.backgroundColor = "#37a08e";
    submitBtn.style.cursor = "pointer";
  });
submitBtn.addEventListener("mouseout", function() {
    submitBtn.style.backgroundColor = "#49c1a2"; 
  });
