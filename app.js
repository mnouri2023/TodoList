let addbtn = document.querySelector("button");
let input = document.querySelector("input");
let taskList = document.querySelector("ul");

addbtn.addEventListener("click", () => {
  if (input.value != "") {
    let text = input.value;
    let task = creatTask(text);
    task.innerHTML +=
      '<span class="closebtn"><i class="fa-solid fa-trash"></i></span>';
    taskList.appendChild(task);
    input.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.style = "display:none";
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function creatTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}

console.log(localStorage.setItem('text','text'))