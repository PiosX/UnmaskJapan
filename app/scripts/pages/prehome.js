import Animation from '../animations/animation';
import PageTransitions from '../animations/pageTransitions';

export default class Prehome extends Animation {
  constructor() {
    super();
    this.pageTrans = new PageTransitions();
    this.prehome = document.querySelector('.prehome');
    this.buttonL = document.querySelector('.prehome-t-anim-f');
    this.buttonP = document.querySelector('.prehome-t-anim-s');
    this.zen = document.querySelector('.component__button__img');
    this.divZen = document.querySelector('.component__button');
    this.arrow = document.querySelector('.component__button__arrow');
    this.t1 = document.querySelector(
      '.prehome__content__desc span:nth-child(1)'
    );
    this.t2 = document.querySelector(
      '.prehome__content__desc span:nth-child(2)'
    );
    this.t3 = document.querySelector(
      '.prehome__content__desc span:nth-child(3)'
    );
    this.t4 = document.querySelector('.align');
    this.t5 = document.querySelector(
      '.prehome__content__desc span:nth-child(4)'
    );
    this.preloader = document.querySelector('.splash');
    this.preloaderText = document.querySelector('.splash__counter');
    this.animations();
    this.addEvents();
  }

  animations() {
    this.titleAnim(this.buttonL, this.buttonP);
    this.zenAnim(this.zen);
    this.blinkAnim(this.preloaderText);
  }

  addEvents() {
    if (this.prehome) {
      this.divZen.style.opacity = 1;
      this.divZen.style.zIndex = 2;
      window.addEventListener('wheel', () => {
        this.preTextAnim(this.t1, this.t2, this.t3, this.t4, this.t5);
      });
      this.divZen.addEventListener('click', () => {
        this.preTextAnim(this.t1, this.t2, this.t3, this.t4, this.t5);
        if (this.t5.style.opacity === `1`) {
          this.removeEvents();
          window.location.pathname = '/home';
        }
      });
      this.divZen.addEventListener('mouseover', () => {
        this.preArrowAnimIn(this.arrow);
      });
      this.divZen.addEventListener('mouseout', () => {
        this.preArrowAnimOut(this.arrow);
      });
      window.addEventListener('load', () => {
        this.pageTrans.interpageTransitionOut(this.preloader);
      });
    }
  }

  removeEvents() {
    window.removeEventListener('wheel', () => {
      this.preTextAnim(this.t1, this.t2, this.t3, this.t4, this.t5);
    });
  }
}
