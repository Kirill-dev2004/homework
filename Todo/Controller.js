class todoController{
    #container$ = null
    #view = null
    #model = null;
    constructor(el){
        this.#container$ = el
        this.#view = new todoView(this.#container$, {
            onDelete: this.onDeleteTodo,
            onCreate: this.onCreateTodo,
        }) 
        this.#model = new TodoModel('todos/')
        this.#model.getAllTodos().then((r) => {
            this.#view.renderTodos(r)
        }) 
    }


    onCreateTodo = (todo) => {
        this.#model.createTodo(todo).then((r) => {  
            this.#view.createSingleTodo(r)
        })
    }

    onDeleteTodo = (id) => {
        // console.log(todo, "cont")
        this.#model.deleteTodo(id).then((r) => {
            this.#view.deleteSingleTodo(r)
            console.log(r.id)
        }
    )}

}