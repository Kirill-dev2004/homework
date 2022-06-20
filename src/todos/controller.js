import TodoModel from "./model";
import MainViewTodo from "./views/mainView";

export default class TodoController{
    #container = null;
    #view = null;
    #model = null;
    constructor(container){
        this.#container = container;
        this.#view = new MainViewTodo(this.#container)
        this.#model = new TodoModel()
        this.init()
    }

    async init(){
        const todos = await this.#model.getTodos();
        this.#view.renderTodos(todos)
    }
}