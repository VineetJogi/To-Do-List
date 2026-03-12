let todoList = []

function addTodo(){
    let inputElement = document.querySelector(".task")
    let todoItem = inputElement.value

    let inputDate = document.querySelector(".date")
    let todoDate = inputDate.value

    if (!todoItem || !todoDate) {
        alert("Please enter both task and due date.");
        inputDate.value=''
        document.querySelector(".task").value = ''
        return;
    }

    // console.log(todoItem)
    // todoList.push(todoItem) //this will add on items in the to do list array
    
    todoList.push({task: todoItem, due: todoDate})
    inputDate.value=''
    console.log(todoDate)
    document.querySelector(".task").value = '' //after click add this will remove the content of the input box
    
    displayItems()
}

function displayItems(){
    let displayElement = document.querySelector(".container")
    let newHTML = ''
    for(let i=0;i<todoList.length;i++){
        newHTML += `
        
        <span>${todoList[i].task}</span>
        <span>${todoList[i].due}</span>
        <button class="delete" onclick="todoList.splice(${i},1); displayItems()">Delete</button>
        
        `
    }
    displayElement.innerHTML = newHTML //this .innerHTML compiles the html file within and runs as an html file only
}