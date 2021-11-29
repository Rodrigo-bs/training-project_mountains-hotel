export default class ScrollSection {
    constructor(classContainer, classButtons) {
        this.classContainer = document.querySelector(classContainer)
        this.classButtons = document.querySelectorAll(classButtons)
    }

    scrollByElement({ currentTarget }) {
        let direction = currentTarget.getAttribute('direction')
        let scrollValue = direction == 'left' ? -1 * (window.innerWidth * .5) : (window.innerWidth * .5)

        this.classContainer.scroll({
            top: 0,
            left: this.classContainer.scrollLeft + scrollValue,
            behavior: 'smooth'  
        })
    }

    addEventListenerInTheContainer() {
        this.classButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                this.scrollByElement(event)
            })
        })
    }

    init() {
        this.addEventListenerInTheContainer()
    }
}