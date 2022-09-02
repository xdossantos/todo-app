const checkIdExists = (array, id) => array.find((item) => id === item.id);

class App {
  // TODO ADD CONSTRUCTOR TO READ LOCAL STORAGE
  items = [];
  constructor() {}
  // CRUD

  transact = function () {
    //   TODO: Write data to localStorage
    // window.localStorage.setItem("todos", this.items);
    document.getElementById("taskList").innerHTML = this.items
      .map(
        (todo, index) => `<li value=${index} key=${index}> ${todo.name} </li>`
      )
      .join("");

    // TODO: Update the UI with new data
  };
  addTodo(newTodo = {}) {
    const _newTodo = { ...newTodo, id: this.items.length };
    this.items.push(_newTodo);
    this.transact();
  }
  get todos() {
    // Read local storage
    return this.items;
  }
  updateTodo(updatedTodo = {}) {
    // Do validation first
    // 1st make sure todo with id exists
    const array = this.items;
    const isIdValid = checkIdExists(array, updatedTodo.id);
    if (!isIdValid) {
      //TODO: Render this feedback;
      console.log(`Todo with id ${updatedTodo.id} not found`);
      return;
    } else {
      this.items[updatedTodo.id] = updatedTodo;
      this.transact();
      //call transact to update dom
    }
  }
  deleteTodo(id = undefined) {
    const isIdValid = checkIdExists(this.items, id);
    if (isIdValid) {
      const array = this.items.splice(id - 1, 1);
      this.items = array;
    }
    this.transact();
  }
}

const myApp = new App();

function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("todo-form");
  console.log(form.elements);
  [...form.elements].forEach((item) => {
    console.log(item.value);
  });

  const newTodo = {
    name: form.elements[0].value,
    dateCreated: form.elements[1].value,
    isComplete: form.elements[2].value,
    dueDate: form.elements[3].value,
  };

  myApp.addTodo(newTodo);
}

// myApp.updateTodo(updatedItem);
// myApp.deleteTodo(1);

// console.log(myApp.todos);
