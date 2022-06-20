export default class TodoListView{
    #container = null;
    constructor(container){
        this.#container = container;
        
    }

    renderTodos(todos){
        this.#container.innerHTML = todos.map(t => this.createTodoEl(t)).join('')
    }

    createTodoEl(todo){
        return `
        <div id="${todo.id}" class="item">
            <div>${todo.title}</div>
            <div>${todo.body}</div>
        </div>
        `
    }
}