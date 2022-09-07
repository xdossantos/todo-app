const a = {};
const arrow = (x) => {
  return undefined;
};

// function arrow() {
//     return undefined;
// }

// const app = (items) => {
//     items: [],
//     addTodo: () => {
//         console.log();

//     }
// }

// function App(items = [] ) {
//     this._items = items;
//     // items: [],
//     this.addTodo =  () => {
//         console.log();
//     }
// }

// const myTodoApp = new App(["test"]);

const app = (items = []) => {
  //Add constructor logic here e.g reading localstorage
  return {
    items,
    addTodo: (newTodo = undefined) => {
            newTodo && items.push(newTodo);
        //   this.transact();
    },
  };
};

const myTodoApp = app(["test"]);
myTodoApp.addTodo("new todo")
// console.log(myTodoApp.items);
console.log(myTodoApp);


