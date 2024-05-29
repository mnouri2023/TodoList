window.addEventListener("load",showtasks);
let addbtn = document.querySelector("button");
let input = document.querySelector("input");
let taskList = document.querySelector("ul");
let tasks;

if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = gettasks();
}

addbtn.addEventListener("click", () => {
  if (input.value != "") {
    let text = input.value;
    let task = creatTask(text);
    task.innerHTML +=
      '<span class="closebtn"><i class="fa-solid fa-trash"></i></span>';
    taskList.appendChild(task);

    savetasks(text);
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

function savetasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}

function gettasks() {
  return localStorage.getItem("todo").split(",");
}

function showtasks() {
  for (let itemtext of gettasks()) {
    let task = creatTask(itemtext);
    task.innerHTML +=
      '<span class="closebtn"><i class="fa-solid fa-trash"></i></span>';
    taskList.appendChild(task);
  }
}

/* showtasks(); یا خط اولی که الان نوشتم انجام */