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
    creatTask(text);


    savetasks(text);
    input.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
   let target= e.target.parentElement.parentElement;
    target.style= "display:none";
tasks.splice(tasks.indexOf(target.textContent),1);
localStorage.setItem('todo',tasks);

  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function creatTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML +=
  '<span class="closebtn"><i class="fa-solid fa-trash"></i></span>';
taskList.appendChild(li);
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
   creatTask(itemtext);
  }
}

/* showtasks(); یا خط اولی که الان نوشتم انجام */



let mytasls=['1','2','3'];
let index = mytasls.indexOf('2')
console.log(index)
mytasls.splice(2,1);/* شماره2 و به انداره یک خانه */
console.log(mytasls);




