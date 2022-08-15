class todoView{
    #container$ = null;
    #listContainer = null;
    #options = null
    constructor(container, options){
        this.#options = options
        this.#container$ = container
        this.init()
    }

    init(){
        this.initialRender()
    }

    initialRender(){
        this.#container$.append(this.createInitialBlock());
        this.initListeners() 
    }

    initListeners(){
        this.#listContainer = $('.list-container').on('click', this.onDeleteTodo.bind(this))
        $('.create-btn').on('click', this.onTodoCreate)
    }

    onTodoCreate = ()  => {
        const title = $('#title').val()
        const body = $('#body').val()
        this.#options.onCreate({title, body})
    }

    onDeleteTodo = (id) => {

        this.#options.onDelete(id)
    }


    deleteSingleTodo(id){
        $('.close').remove(this.createEl(id))
    }

    renderTodos(todos){

        const html = todos.map((e) => this.createEl(e)).join('')
        this.#listContainer.html(html)
    }

    createEl(todo){
        return `<div class="item" id=${todo.id}>
        <div class="item-content">
            <div>
                <div class="item-title">${todo.title}</div>
                <div class="item-body">${todo.body}</div>
            </div>
            <div>Data</div>
        </div>
        <div class="item-actions">
            <button class="close">X</button>
            <button class="complete">Complete</button>
        </div>
    </div>`
    }

    createSingleTodo(todo){
        $('.list-container').append(this.createEl(todo))
    }

    createInitialBlock(){
      return  `<div>
        <div class="btn-container">
        <input type="text" id="title">
        <input type="text" id="body">
        <button class="create-btn">Create todo</button>
        </div>
        <div class="list-container"></div>
    </div>`
    }
}