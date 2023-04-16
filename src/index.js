document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList(e.target["new-task-description"].value);
    form.reset();
  });
});

function toDoList(text) {
  let toDoText = document.createElement("p");
  let submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", handleDelete);
  submitBtn.textContent = "x";
  toDoText.textContent = `${text} `;
  toDoText.appendChild(submitBtn);
  document.querySelector("#list").appendChild(toDoText);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
