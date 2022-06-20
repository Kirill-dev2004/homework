import TodoListView from "./list";

export default class MainViewTodo{
    #container = null;
    #headerContainer = null;
    #listContainer = null;
    #editContainer = null;
    #listView = null
    constructor(container){
        this.#container = container;
        this.init()
        this.#listView = new TodoListView(this.#listContainer);
    }

    init(){
        this.renderView();
        this.initContainers()
    }

    renderView(){
        this.#container.innerHTML = `
    <div>
        <div class="header">header</div>
        <div class="body">
            <div class="list-container">list</div>
            <div class="edit-container">edit</div>
        </div>
    </div>
        `
    }

    initContainers(){
        this.#headerContainer = this.#container.querySelector('.header');
        this.#listContainer = this.#container.querySelector('.list-container');
        this.#editContainer = this.#container.querySelector('.edit-container')
    }

    renderTodos(todos){
        this.#listView.renderTodos(todos)
    }
}