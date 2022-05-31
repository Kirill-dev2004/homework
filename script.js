class Todo{
    static url = "todos";
    #todos = [];
    #currentTodo = null;
    #currentTodoE = null;
    #todoContainer = null;
    #http = null;
    #changeEl = null;
    #changeTitle = null;
    #changeBody = null;
    #CLASSES = {
        todo_complete: "todo-complete",
        item_active: "item-active",
        show_change: "show-change",
        hideCompBut: "hide-element",
        close: "close",
        complete: "complete",
        todoList: "list",
    }
    constructor(el, editEl){
        this.#todoContainer = el;
        this.#changeEl = editEl;
        this.#todoContainer.addEventListener('click', this.onTodoClick.bind(this))
        this.#changeEl.querySelector('.save').addEventListener('click', this.onSaveTodo.bind(this))
        this.#changeTitle = this.#changeEl.querySelector('.change-title')
        this.#changeBody = this.#changeEl.querySelector('.change-body')
        this.#http = new Http(Todo.url);
        this.getTodos()
    }

    getTodos(){
        this.#http.getAll().then((d) => {
            this.#todos = d;
            this.renderTodos(this.#todos)
        })
    }

    renderTodos(todos){
       this.#todoContainer.innerHTML = todos.map(t => this.createTodoElement(t)).join("");
    }

    createTodoElement(todo){
        return ` <div class="item ${this.changeComplete()}" id="${todo.id}">
        <div class="item-content">
            <div>
                <div class="item-title">${todo.title}</div>
                <div class="item-body">${todo.body}</div>
            </div>
            <div>${this.createData(todo.createData)}</div>
        </div>
        <div class="item-actions">
            <div class="close">X</div>
            <button class="complete ${this.changeHideComp()}">Complete</button>
        </div>
    </div>`
    }

    changeComplete(){
        todo.isComplete ? this.#CLASSES.todo_complete : ""
    }

    changeHideComp(){
        todo.isComplete ?  this.#CLASSES.hideCompBut : ""
    }

    

    createData(data){
        const newData = moment(data).format('MMMM Do YYYY')
        return newData
    }

    onTodoClick(e){
        const target = e.target;
        this.#currentTodoE = e.target.closest('.item')
        if(this.#currentTodoE){
            this.#currentTodo = this.#todos.find(e => e.id === this.#currentTodoE.id)
        }
        if(e.target.classList.contains(this.#CLASSES.close)){
            this.deleteTodo(this.#currentTodo.id)
            this.completeTodo(this.#currentTodo)
            return
        }
        if(e.target.classList.contains(this.#CLASSES.complete)){
            this.completeTodo(this.#currentTodo)
            return
        }
        if(!e.target.classList.contains(this.#CLASSES.todoList)){
            this.changeTodo()
            return
        } 
        
    }

    deleteTodo(id){
        this.#http.delete(id).then((r) => {
            if(r.deletedCount >= 1){
                this.#todos = this.#todos.filter(t => t.id !== id)
                this.#currentTodoE.remove()
            }
        })
    }

    changeTodo(){
        this.#changeEl.classList.add(this.#CLASSES.show_change);
        this.#currentTodoE.classList.add(this.#CLASSES.item_active)
        this.#changeTitle.value = this.#currentTodo.title;
        this.#changeBody.value = this.#currentTodo.body;
    }

    completeTodo(todo){
        todo.isComplete = true;
        this.#http.upData(todo.id, todo).then((r)=> {
            if(r && r.id){
                this.#currentTodoE.classList.add(this.#CLASSES.todo_complete)
            }
        })
    }

    createTodo(title, body){
        const todo = {
            title:title,
            body:body,
            isComplete: false,
        };
        this.#http.create(todo).then((r) => {
            if(r && r.id){
                this.#todos.unshift(r)
                const content = this.createTodoElement(r);
                this.#todoContainer.insertAdjacentHTML("afterbegin", content)
            }
        })
    }

    onSaveTodo() {
        this.#currentTodo.title = this.#changeTitle.value;
        this.#currentTodo.body = this.#changeBody.value;
        this.#http.upData(this.#currentTodo.id, this.#currentTodo).then((r) => {
            if(r && r.id){
                this.#currentTodoE.querySelector('.item-title').innerHTML = r.title
                this.#currentTodoE.querySelector('.item-body').innerHTML = r.body
                this.#changeEl.classList.remove(this.#CLASSES.show_change);
                this.#currentTodoE.classList.remove(this.#CLASSES.item_active)
            }
        })
    }
}

const todo = new Todo(document.querySelector('.list'), document.querySelector('.edit-container'))
const titleE = document.querySelector('.title')
const bodyE = document.querySelector('.body')


document.querySelector('.create').addEventListener('click', () => {
    todo.createTodo(titleE.value, bodyE.value)
    titleE.value = '';
    bodyE.value = '';
})