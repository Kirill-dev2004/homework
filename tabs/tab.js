class Tab{
    static CLASSES = {
        title: 'item-title',
        body: 'item-body',
        hr: 'hr',
        display: 'display'
    }
    constructor(el){
        this.el = el;
        this.el.addEventListener('click', this.onTitleClick.bind(this))
        this.items = [...el.children];
        this.setChildrenClass()
    }
    setChildrenClass(){
        this.items.forEach(e =>{
            const [title, hr, body] = e.children;
            title.classList.add(Tab.CLASSES.title)
            hr.classList.add(Tab.CLASSES.hr)
            body.classList.add(Tab.CLASSES.body)
        })
    }
    
    onTitleClick(event){
        const target = event.target;
        this.items.forEach(e =>{
            const [title, hr, body] = e.children;
            if(title === target){
                body.classList.toggle(Tab.CLASSES.display)
                hr.classList.toggle(Tab.CLASSES.display)
            }else{
                body.classList.remove(Tab.CLASSES.display)
                hr.classList.remove(Tab.CLASSES.display)
            }
        })
    }
}

