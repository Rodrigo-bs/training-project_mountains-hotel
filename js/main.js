import AnimationSections from './module/animation-section.js';
import AnimationServiceImage from './module/animation-service-image.js';
import AnimationComments from './module/animation-comments.js';

let animation = new AnimationSections('section.animation-section', 'animation-section-ativo');
animation.checkScreenLocation();
animation.init();

let imageAnimation = new AnimationServiceImage('.box_content-li a', '.services-box_img img','services-img-ativo');
imageAnimation.init();

let scrollSection = new AnimationComments('.comments-content', '.comments-buttons');
scrollSection.init();