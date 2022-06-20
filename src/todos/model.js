import Http from "../shared/http";

export default class TodoModel{
    #http = null;
    #todos = null;
    constructor(){
        this.#http = new Http()
        this.getTodos()
    }

    async getTodos(){
        this.#todos = await this.#http.get() 
        return this.#todos;
    }



}