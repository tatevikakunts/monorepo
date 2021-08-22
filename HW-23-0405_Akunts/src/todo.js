import { openTab } from "./libs";
const getTodos = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  const output = await result.json();
  renderTodos(output);
  openTab("#todoBtn", "#todosTab");
};
const renderTodos = (todos) => {
  document.querySelector("#todosTab").innerHTML = "";
  todos.forEach((todo) => {
    document.querySelector("#todosTab").innerHTML += `<div>${todo.title}
    </div>`;
  });
};
export { getTodos };
