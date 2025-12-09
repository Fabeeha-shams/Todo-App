let doc = document.getElementById("todoinput");
let ul = document.createElement("ul");
document.querySelector(".container").appendChild(ul);

function addtodo() {
    let todo = doc.value.trim();
    if (todo === "") return;
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = todo;
    span.onclick = () => li.classList.toggle("done");
    let actions = document.createElement("div");
    actions.className = "actions";
    let btn = document.createElement("button");
    btn.textContent = "Edit";
    btn.onclick = () => editTask(span);
    let removebtn = document.createElement("button");
    removebtn.textContent = "Remove";
    removebtn.onclick = () => li.remove();
    actions.appendChild(btn);
    actions.appendChild(removebtn);
    li.appendChild(span);
    li.appendChild(actions);
    ul.appendChild(li);
    doc.value = "";
}

function editTask(span) {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText;
    }
}
