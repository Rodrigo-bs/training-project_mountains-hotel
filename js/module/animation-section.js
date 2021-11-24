export default class AnimationSections {
    constructor(classSections, classActive) {
        this.classSections = classSections
        this.sections = document.querySelectorAll(classSections)
        this.classActive = classActive

        this.windowHeight = window.innerHeight * 0.7
        this.checkScreenLocation = this.checkScreenLocation.bind(this)
    }

    checkViewSection() {
        let distances = []
        console.log(this.sections)
        this.sections.forEach(section => {
            distances.push(Math.round(section.getBoundingClientRect().y))
        })

        distances.forEach((distance, i) => {
            if (this.windowHeight > distance)
                this.sections[i].classList.add(this.classActive)
        })
    }

    checkScreenLocation() {
        let sectionNoActive = document.querySelectorAll('section:not(' + this.classActive + ')')

        if (sectionNoActive.length)
            this.checkViewSection()
        else 
            this.removeEventInTheWindow()
    }


    addEventInTheWindow() {
        window.addEventListener('scroll', this.checkScreenLocation)
    }

    removeEventInTheWindow() {
        window.removeEventListener('scroll', this.checkScreenLocation)
    }

    init() {
        this.addEventInTheWindow()
    }
}