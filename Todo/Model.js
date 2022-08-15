class TodoModel{
    #http = null
    #endpoint = null;
    constructor(endpoint){
        this.#endpoint = endpoint
        this.#http = new Http()
    }

    getAllTodos(){
      return  this.#http.getAll(this.#endpoint)
    }

    createTodo(todo){
        return this.#http.create(this.#endpoint, {...todo, isComplete:false}).then((r) => r)
    }

    deleteTodo(id){
        console.log(id)
        return this.#http.delete(this.#endpoint + id).then((r) => r)
    }


}