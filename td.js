

let todoList = JSON.parse(localStorage.getItem("todos")) || [];

displayItems();

function saveData(){
localStorage.setItem("todos", JSON.stringify(todoList));
}

function addTodo(){

let taskInput = document.querySelector(".task");
let dateInput = document.querySelector(".date");

let task = taskInput.value;
let dueDate = dateInput.value;

if(!task || !dueDate){
alert("Please fill both fields");
return;
}

let time = new Date().toLocaleTimeString();

todoList.push({
task: task,
due: dueDate,
time: time
});

taskInput.value="";
dateInput.value="";

saveData();
displayItems();
}

function deleteTask(index){
todoList.splice(index,1);
saveData();
displayItems();
}

function displayItems(){

let container = document.querySelector(".container");
let html="";

for(let i=0;i<todoList.length;i++){

html += `

<div class="taskCard">${todoList[i].task}</div>

<div>${todoList[i].due}</div>

<div>${todoList[i].time}</div>

<button class="delete" onclick="deleteTask(${i})">Delete</button>

`;
}

container.innerHTML = html;

}

document.querySelector(".task").addEventListener("keypress",function(e){
if(e.key==="Enter"){
addTodo();
}
});

let toggle = document.getElementById("modeToggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerText="☀️";
}else{
toggle.innerText="🌙";
}

}