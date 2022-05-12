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
        this.activeIndex = this.titles.indexOf(e.target)
        this.renderElements()
    }

    renderElements(){
        this.iterateElements(this.titles, Tab.CLASSES.active)
        this.iterateElements(this.bodys, Tab.CLASSES.show)
    }

    setActiveClasses(elements, activeClass, commonClass){
        elements.forEach((e, i) =>{
            e.classList.add(commonClass);
            if(i === this.activeIndex){
                e.classList.add(activeClass)
            }
        })
    }

    iterateElements(elements, elClass){
        elements.forEach((e, i) =>{
            if(i === this.activeIndex){
                e.classList.add(elClass)
            }else{
                e.classList.remove(elClass)
            }
        })
    }

}