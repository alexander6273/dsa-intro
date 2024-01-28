"use strict";
//💯

window.addEventListener("DOMContentLoaded", start);
//🤔

function start() {
  console.log("JavaScript kører");
  hideAll();
  askAboutName();
}
//💯

function hideAll() {
  document.querySelector("#ask-name").classList.add("hide");
  document.querySelector("#ask-age").classList.add("hide");
  document.querySelector("#ask-birthyear").classList.add("hide");
  document.querySelector("#success").classList.add("hide");
  document.querySelector("#failure").classList.add("hide");
}
//💯

function fillInFields(fieldname, value) {
  document.querySelectorAll(`[data-field=${fieldname}]`).forEach(element => (element.textContent = value));
}
//🤔

function askAboutName() {
  const form = document.querySelector("#ask-name");
  //💯
  form.addEventListener("submit", answeredName);
  //🤔
  form.classList.remove("hide");
  //✅
}

function answeredName(event) {
  event.preventDefault();
  //🤔

  const form = event.target;
  //🤔
  form.removeEventListener("submit", answeredName);
  //🤔
  form.querySelector("button").disabled = true;
  //💯

  const firstname = form.firstname.value;
  //💯
  console.log("Answered name: " + firstname);
  //💯

  fillInFields("firstname", firstname);
  //💯

  askAboutAge();
  //💯
}

function askAboutAge() {
  const form = document.querySelector("#ask-age");
  form.addEventListener("submit", answeredAge);
  form.classList.remove("hide");
}
//samme som aksAboutName()

function answeredAge(event) {
  event.preventDefault();

  const form = event.target;
  form.removeEventListener("submit", answeredAge);
  form.querySelector("button").disabled = true;

  const age = form.age.valueAsNumber;
  console.log("Answered age: " + age);

  fillInFields("age", age);

  askAboutBirthYear(age);
}
//samme som answeredName()

function askAboutBirthYear(age) {
  // calculate birthyear - expect that the person HASN'T had their birthday yet this year
  const birthyear = 2024 - 1 - age;
  //💯

  fillInFields("birthyear", birthyear);
  //💯

  const form = document.querySelector("#ask-birthyear");
  form.addEventListener("submit", answeredBirthyear);
  form.classList.remove("hide");
  //🤔
}

function answeredBirthyear(event) {
  event.preventDefault();

  const form = event.target;
  form.removeEventListener("submit", answeredBirthyear);
  form.querySelector("button").disabled = true;

  const correct = form.correct.value;
  console.log("Answered correct: " + correct);
  //samme som answeredName
  //---------------------//
  if (correct === "yes") {
    showSuccess();
  } else {
    showFailure();
  }
  //🤔  hvad er det nu lige betyder "==="? har fået det fortalt før men kan ikke huske det :)
}

function showSuccess() {
  document.querySelector("#success").classList.remove("hide");
}
//💯

function showFailure() {
  document.querySelector("#failure").classList.remove("hide");
}
//💯