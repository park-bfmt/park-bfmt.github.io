const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");
const toDoCard = document.querySelector("#toDo-card");

let toDos = [];

const TODOS_KEY = "toDos";
const HIDDEN = "hidden";

if (localStorage.UserName === undefined) {
  toDoCard.classList.add(HIDDEN);
} else {
  toDoCard.classList.remove(HIDDEN);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  console.log(toDos.length);
  if (toDos.length > 4) {
    alert("할 일이 너무 많습니다. (5개의 할 일만 저장가능합니다.)");
  } else {
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };

    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
