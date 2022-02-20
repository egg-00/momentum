const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:first-child");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // console.log(greeting.innerText);
}

const savedname = localStorage.getItem("username");

if (savedname === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedname);
}
