const p = document.getElementById("p");
const btnSave = document.getElementById("save");
const btnRemove = document.getElementById("remove");
const input = document.getElementById("input");

btnSave.addEventListener("click", function (e) {
  e.preventDefault();
  saveText();
});

function saveText() {
  localStorage.setItem("name", input.value);
  p.innerHTML = localStorage.getItem("name");
}

btnRemove.addEventListener("click", function (e) {
  e.preventDefault();
  removeText();
});

function removeText() {
  localStorage.removeItem("name");
}

//Esercizio 2

const interval = setInterval(time, 1000);
const timer = document.getElementById("timer");

function time() {
  sessionStorage.setItem("timer", timer);
}
