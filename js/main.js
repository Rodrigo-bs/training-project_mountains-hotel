import AnimationSections from "./module/animation-section.js";
import AnimationServiceImage from "./module/animation-service-image.js"

let animation = new AnimationSections('section.animation-section', 'animation-section-ativo');
animation.checkScreenLocation()
animation.init();