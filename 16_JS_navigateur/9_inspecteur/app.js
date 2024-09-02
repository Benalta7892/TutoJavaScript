import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

const person = { firstname: "John" };
console.table(person);
person.firstname = "Jane";

try {
  // const todos = await fetchJSON("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todosInStorage = sessionStorage.getItem("todos")?.toString(); // ou localStorage pour une persistance plus longue
  let todos = [];
  if (todosInStorage) {
    todos = JSON.parse(todosInStorage);
  }
  const list = new TodoList(todos);
  list.appendTo(document.querySelector("#todolist"));
} catch (e) {
  const alertElement = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  alertElement.innerText = "Impossible de charger les elements";
  document.body.prepend(alertElement);
  console.error(e);
}
