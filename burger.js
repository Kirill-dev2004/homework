class Burger{
    static CLASSES = {
        burger: 'menu-btn',
        menu: 'menu',
        active: 'active',
        change_class: 'menu-burger',

    }
    
    constructor(contE){
        this.el = contE;
        this.el.addEventListener('click', this.onClickBurg.bind(this))
        this.items = [...contE.children]
        this.setClassChildren()
    }

    setClassChildren(){
        const [burger, menu] = this.el.children;
        burger.classList.add(Burger.CLASSES.burger)
        menu.classList.add(Burger.CLASSES.menu)
        menu.classList.add(Burger.CLASSES.change_class)
    }

    onClickBurg(event){
        const target = event.target;
        const [burger, menu] = this.el.children
        
         const menuChild = [...menu.children] 
         menuChild.forEach((word) => {
            word.addEventListener('mouseover', this.hoverElement)
            word.addEventListener('mouseout', this.hoverElementDelete)
         })

        if(burger === target){
            burger.classList.toggle(Burger.CLASSES.active);
            menu.classList.toggle(Burger.CLASSES.active)
        }
        else{
            burger.classList.toggle(Burger.CLASSES.active);
            menu.classList.toggle(Burger.CLASSES.active)
        }
    }

    hoverElement(){
        this.style.backgroundColor = "Grey"
    }

    hoverElementDelete(){
        this.style.backgroundColor = ''
    }
    }
