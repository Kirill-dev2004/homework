// class Tab{
//     static CLASSES = {
//         title: 'item-title',
//         body: 'item-body',
//         hr: 'hr',
//         display: 'display'
//     }
//     constructor(el){
//         this.el = el;
//         this.el.addEventListener('click', this.onTitleClick.bind(this))
//         this.items = [...el.children];
//         this.setChildrenClass()
//     }
//     setChildrenClass(){
//         this.items.forEach(e =>{
//             const [title, hr, body] = e.children;
//             title.classList.add(Tab.CLASSES.title)
//             hr.classList.add(Tab.CLASSES.hr)
//             body.classList.add(Tab.CLASSES.body)
//         })
//     }
    
//     onTitleClick(event){
//         const target = event.target;
//         this.items.forEach(e =>{
//             const [title, hr, body] = e.children;
//             if(title === target){
//                 body.classList.toggle(Tab.CLASSES.display)
//                 hr.classList.toggle(Tab.CLASSES.display)
//             }else{
//                 body.classList.remove(Tab.CLASSES.display)
//                 hr.classList.remove(Tab.CLASSES.display)
//             }
//         })
//     }
// }


class Tab{
    static CLASSES = {
       active: 'title-active',
       title_cont: 'title-container',
       show: 'show',
        title: 'item-title',
        body: 'item-body'
    }
    constructor(el){
        this.init(el)
    }

    init(el){
        this.setElement(el)
        this.initialClassSet(el)
        el.children[0].addEventListener('click', this.onTab)
    }

    setElement(el){
        this.titles = [...el.children[0].children];
        this.bodys = [...el.children[1].children];
        this.activeIndex = 0;
    }
    initialClassSet(el){
        this.setActiveClasses(this.titles, Tab.CLASSES.active, Tab.CLASSES.title)
        this.setActiveClasses(this.bodys, Tab.CLASSES.show, Tab.CLASSES.body)
        el.children[0].classList.add(Tab.CLASSES.title_cont)
    }

    onTab = (e) =>{
        console.log(e.target)
    }

    showContent(){

    }

    hideContent(){

    }

    setActiveClasses(elements, activeClass, comonClass){
        elements.forEach((e, i) =>{
            e.classList.add(comonClass);
            if(i === this.activeIndex){
                e.classList.add(activeClass)
            }
        })
    }

}