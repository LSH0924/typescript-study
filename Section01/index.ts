import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/3';

//Response.data has properties of :
// id
// title
// completed
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  // 혹은
  // const todo: Todo = response.data;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// 매개변수의 타입을 명확하게 해 주어야 함
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
