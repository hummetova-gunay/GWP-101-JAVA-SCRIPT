let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let todoList = document.querySelector(".list-group");
let editBtn=document.querySelector('.editBtn')

addTodo.disabled = true;

let todo = JSON.parse(localStorage.getItem("todos")) || [];

todoInput.addEventListener("input", function (e) {
  if (e.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

addTodo.addEventListener("click", function (e) {
    e.preventDefault()
    let listObj = {
      id: Date.now(),
      textTodo: todoInput.value,
    };
    todo.push(listObj);
    localStorage.setItem("todos", JSON.stringify(todo));
  createTodo();
  todoInput.value = "";
});

function createTodo(){
  todoList.innerHTML = "";
  todo.forEach((item) => {
    todoList.innerHTML += `
          <li
                class="list-group-item list-group-item-info my-2 d-flex justify-content-between align-items-center rounded"
              >
                <span>${item.textTodo}</span>
                <div>
                  <button type="button" class="btn btn-success editBtn" onclick=editTodo(${item.id})>
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger deleteBtn" onclick=removeTodo(${item.id})>
                    Delete
                  </button>
                </div>
              </li>`;
  });
  todoInput.value = "";
}
createTodo()

function removeTodo(id){
    todo=todo.filter(el=>el.id!=id)
    localStorage.setItem('todos', JSON.stringify(todo))
    createTodo()
}
// allEditBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//       let todoText = this.closest("li").firstElementChild.innerText;
//       todoInput.value = todoText;
//       todoInput.focus();
//       let todoId = +(this.closest("li").getAttribute("data-id"));
//       for (let i = 0; i < todo.length; i++) {
//         if (todo[i].id === todoId) {
//           todo.splice(i, 1);
//           break;
//         }
//       }
//       localStorage.setItem("todos", JSON.stringify(todo));
//       createTodo();
//       addTodo.disabled = false;
//       addTodo.innerText = "Add";
//     });
//   });

// function editTodo(id){
//     let todoText = editBtn.closest("li").firstElementChild.innerText;
//           todoInput.value = todoText;
//           todoInput.focus();
// }
  






