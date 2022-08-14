const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USER_NAME = "UserName";

function loginSubmit(event) {
  loginForm.classList.add(HIDDEN_CLASS);
  const userName = loginInput.value;

  localStorage.setItem(USER_NAME, userName);
  useGreeting(userName);
}

function useGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USER_NAME);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  useGreeting(savedUserName);
}
