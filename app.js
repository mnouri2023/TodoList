let addbtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

addbtn.addEventListener("click", () => {
  let text = input.value;
  let task = creatTask(text);
  task.innerHTML+='<span class="closebtn"><i class="fa-solid fa-trash"></i></span>';
  ul.appendChild(task);
  input.value = "";
});

function creatTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
