export default class AnimationServiceImage {
    constructor(classImage, classList, classActive) {
        this.images = document.querySelectorAll(classImage)
        this.list = document.querySelectorAll(classList)
        this.classActive = classActive
    }

    addEventListenerInTheList() {
        
    }

    init() {
        this.addEventListenerInTheList()
    }
}