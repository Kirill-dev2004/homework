// class Contact{
//     static url = "contacts";
//     #contacts = [];
//     #currentContact = null;
//     #currentContactE = null;
//     #contactContainerE = null;
//     #http = null;
//     #changeEl = null;
//     #changeName = null;
//     #changeSurname = null;
//     #changeNumber = null
//     #CLASSES = {
//         show_change: "show-change",
//         hideCompBut: "hide-element",
//         close: "close",
//         complete: "complete",
//         contactList: "list",
//     }
//     constructor(el, changeEl){
//         this.#contactContainerE = el;
//         this.#changeEl = changeEl;
//         this.#contactContainerE.addEventListener('click', this.onTodoClick.bind(this))
//         this.#changeEl.querySelector('.save').addEventListener('click', this.onSaveContact.bind(this))
//         this.#changeName = this.#changeEl.querySelector('.change-name')
//         this.#changeSurname = this.#changeEl.querySelector('.change-surname')
//         this.#changeNumber = this.#changeEl.querySelector('.change-number')
//         this.#http = new Http(Contact.url);
//         this.getContacts()
//     }

//     getContacts(){
//         this.#http.getAll().then((d) => {
//             this.#contacts = d;
//             this.renderContact(this.#contacts)
//         })
//     }

//     renderContact(contacts){
//        this.#contactContainerE.innerHTML = contacts.map((c) => this.createContactElement(c)).join("");
//     }

//     createContactElement(contact){
//         return ` <div class="item" id="${contact.id}">
//         <div class="item-content">
//             <div>
//                 <div class="item-name">${contact.name}</div>
//                 <div class="item-surname">${contact.lastName}</div>
//                 <div class="item-number">${contact.phone}</div>
//             </div> 
//         </div>
//         <div class="item-actions">
//             <div>
//             <button class="close">Delete</button>
//             <button class="complete">Change</button>
//             </div>
//             <div class ="time">${this.createData(contact.createData)}</div>
//         </div>
//     </div>`
//     }

//     createData(data){
//         const newData = moment(data).format('MMMM Do YYYY')
//         return newData
//     }

//     // validateInfo(name, last, phone){ /////// тут хотел сделать валидацию
//     //     if(! name.trim() || !last.trim() || !phone.trim() || isNaN(+phone)){
//     //         return false
//     //     }
//     //     return true
//     // } 

//     onTodoClick(e){
//         const target = e.target;
//         this.#currentContactE = e.target.closest('.item')
//         if(this.#currentContactE){
//             this.#currentContact = this.#contacts.find(e => e.id === this.#currentContactE.id)
//         }
//         if(e.target.classList.contains(this.#CLASSES.close)){
//             this.deleteContact(this.#currentContact.id)
//             return
//         }
//         if(e.target.classList.contains(this.#CLASSES.complete)){
//             this.changeContact()
//             return
//         }
//         // if(!validateInfo(nameE.value, surnameE.value, numberE.value)){
//         //     alert('Data is incorrect');
//         //     return;
//         // }
//     }

//     deleteContact(id){
//         this.#http.delete(id).then((r) => {
//             if(r.deletedCount >= 1){
//                 this.#contacts = this.#contacts.filter(t => t.id !== id)
//                 this.#currentContactE.remove()
//             }
//         })
//     }

//     changeContact(){
//         this.#changeEl.classList.toggle(this.#CLASSES.show_change);
//         this.#changeName.value = this.#currentContact.name;
//         this.#changeSurname.value = this.#currentContact.lastName;
//         this.#changeNumber.value = this.#currentContact.phone;
//     }

//     createContact(name, lastName, phone){
//         const contact = {
//             name:name,
//             lastName:lastName,
//             phone:phone,
//         };
//         this.#http.create(contact).then((r) => {
//             if( r || r.id){
//                 this.#contacts.unshift(r)
//                 const content = this.createContactElement(r);
//                 this.#contactContainerE.insertAdjacentHTML("afterbegin", content)
//             } 
//         })
//     }

//     onSaveContact(){
//         this.#currentContact.name = this.#changeName.value;
//         this.#currentContact.lastName = this.#changeSurname.value;
//         this.#currentContact.phone = this.#changeNumber.value;
//         this.#http.upData(this.#currentContact.id, this.#currentContact).then((r) => {
//                 this.#currentContactE.querySelector('.item-name').innerHTML = r.name
//                 this.#currentContactE.querySelector('.item-surname').innerHTML = r.lastName
//                 this.#currentContactE.querySelector('.item-number').innerHTML = r.phone
//                 this.#changeEl.classList.remove(this.#CLASSES.show_change);
//                 this.#currentContactE.classList.remove(this.#CLASSES.item_active)
//         })
//     }
// }

// const contact = new Contact(document.querySelector('.list'), document.querySelector('.change-container'))
// const nameE = document.querySelector('.name')
// const surnameE = document.querySelector('.surname')
// const numberE = document.querySelector('.number')


// document.querySelector('.create').addEventListener('click', () => {
//     contact.createContact(nameE.value, surnameE.value, numberE.value)
//     nameE.value = '';
//     surnameE.value = '';
//     numberE.value = '';
// })

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

