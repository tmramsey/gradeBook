var gradeInputForm = document.getElementById("gradeinputform");
var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var scoreInput = document.getElementById("score");

gradeInputForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(fnameInput.value);
  console.log(lnameInput.value);
  console.log(scoreInput.value);
}
