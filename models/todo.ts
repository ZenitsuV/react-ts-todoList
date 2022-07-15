class Todo {
  id: string | number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Date.now();
  }
}

export default Todo;
