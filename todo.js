class Todo{
    static url = "todos";
    #todos = [];
    #actualTodo = null;
    #actualTodoE = null;
    #todoContainer = null;
    #http = null;
    #changeEl = null;
    #changeTitle = null;
    #changeBody = null;
    #CLASSES = {
        todo_complete: "todo-complete",
        item_active: "item-active",
        show_change: "show-change",
        hide_comp_but: "hide-element",
        close: "close",
        complete: "complete",
        todo_list: "list",
    }
    constructor(el, editEl){
        this.#todoContainer = el;
        this.#changeEl = editEl;
        this.#todoContainer.addEventListener('click', this.onTodoClick.bind(this))
        this.#changeEl.querySelector('.save').addEventListener('click', this.onSaveTodo.bind(this))
        this.#changeTitle = this.#changeEl.querySelector('.change-title')
        this.#changeBody = this.#changeEl.querySelector('.change-body')
        this.#http = new Http(Todo.url);
        this.getTodo()
    }

    getTodo(){
        this.#http.getAll().then((d) => {
            this.#todos = d;
            this.renderTodo(this.#todos)
        })
    }

    renderTodo(todo){
       this.#todoContainer.innerHTML = todo.map(t => this.createTodoElement(t)).join("");
    }

    createTodoElement(todo){
        return ` <div class="item ${todo.isComplete ? this.#CLASSES.todo_complete : ""}" id="${todo.id}">
        <div class="item-content">
            <div>
                <div class="item-title">${todo.title}</div>
                <div class="item-body">${todo.body}</div>
            </div>
            <div>${this.createData(todo.createData)}</div>
        </div>
        <div class="item-actions">
            <div class="close">X</div>
            <button class="complete ${todo.isComplete ?  this.#CLASSES.hide_comp_but : ""}">Complete</button>
        </div>
    </div>`
    }

    createData(data){
        const newData = moment(data).format('MMMM Do YYYY')
        return newData
    }

    onTodoClick(e){
        const target = e.target;
        this.#actualTodoE = e.target.closest('.item')
        if(this.#actualTodoE){
            this.#actualTodo = this.#todos.find((e) => e.id === this.#actualTodoE.id)
        }
        if(e.target.classList.contains(this.#CLASSES.close)){
            this.deleteTodo(this.#actualTodo.id)
            this.completeTodo(this.#actualTodo)
            return
        }
        if(e.target.classList.contains(this.#CLASSES.complete)){
            this.completeTodo(this.#actualTodo)
            return
        }
        if(!e.target.classList.contains(this.#CLASSES.todo_list)){
            this.changeTodo()
            return
        } 
        
    }

    deleteTodo(id){
        this.#http.delete(id).then((r) => {
            if(r.deletedCount >= 1){
                this.#todos = this.#todos.filter(t => t.id !== id)
                this.#actualTodoE.remove()
            }
        })
    }

    completeTodo(todo){
        todo.isComplete = true;
        this.#http.upData(todo.id, todo).then((r)=> {
            if(r && r.id){
                this.#actualTodoE.classList.add(this.#CLASSES.todo_complete)
            }
        })
    }

    changeTodo(){
        this.#changeEl.classList.add(this.#CLASSES.show_change);
        this.#actualTodoE.classList.add(this.#CLASSES.item_active)
        this.#changeTitle.value = this.#actualTodo.title;
        this.#changeBody.value = this.#actualTodo.body;
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
        this.#actualTodo.title = this.#changeTitle.value;
        this.#actualTodo.body = this.#changeBody.value;
        this.#http.upData(this.#actualTodo.id, this.#actualTodo).then((r) => {
            if(r || r.id){
                this.#actualTodoE.querySelector('.item-title').innerHTML = r.title
                this.#actualTodoE.querySelector('.item-body').innerHTML = r.body
                this.#changeEl.classList.remove(this.#CLASSES.show_change);
                this.#actualTodoE.classList.remove(this.#CLASSES.item_active)
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

