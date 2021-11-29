export default class AnimationServiceImage {
    constructor(classList, classImg, classActive) {
        this.list = document.querySelectorAll(classList)
        this.imgs = document.querySelectorAll(classImg)
        this.class = classActive

    }
    
    addEventListenerInTheList() {
        this.list.forEach(li => {
            li.addEventListener('mouseenter', (event) => {
                this.activeImage(event)
            })
        })
    }
    
    activeImage(event) {
        let imgName = event.currentTarget.getAttribute('aria-image')

        this.imgs.forEach(img => {
            if (img.getAttribute('aria-image') == imgName) img.classList.add(this.class)
            else img.classList.remove(this.class)
        })
    }
    
    init() {
        this.addEventListenerInTheList()
    }
}