class Burger{
    static CLASSES = {
        burger: 'menu-btn',
        menu: 'menu',
        active: 'active',
        delete_class: 'menu-burger',

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
        menu.classList.add(Burger.CLASSES.delete_class)
    }

    onClickBurg(event){
        const target = event.target;
        const [burger, menu] = this.el.children
        
        // const menuChild = [...menu.children]   /////тут хотел добраться до дивов меню, чтобы по клику на них закрывать все///////////
        // console.log(menuChild)
        if(burger === target){
            burger.classList.toggle(Burger.CLASSES.active);
            menu.classList.toggle(Burger.CLASSES.active)
        }else{
            burger.classList.toggle(Burger.CLASSES.active);
            menu.classList.toggle(Burger.CLASSES.active)
        }
    }

    hoverElement(){
        console.log('mouse enter')
    }
    }
