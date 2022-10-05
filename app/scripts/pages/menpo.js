import Animation from '../animations/animation';

export default class Menpo extends Animation {
  constructor() {
    super();
    this.counter = 1;
    this.menpo = document.querySelector('.menpo');
    this.homeMask = document.querySelector('.home__mask');
    this.item1 = document.querySelector('.menpo-item-1');
    this.item2 = document.querySelector('.menpo-item-2');
    this.item3 = document.querySelector('.menpo-item-3');
    this.item4 = document.querySelector('.menpo-item-4');
    this.button = document.querySelector('.component__button');
    this.jpMenpo = document.querySelector('.menpo__content__title');
    this.enMenpo = document.querySelector('.menpo__title-en');
    this.animations();
    this.addEvents();
    this.redirect();
  }

  animations() {
    this.jpTitleAnimation(this.jpMenpo);
    this.enTitleAnimation(this.enMenpo);
  }

  addEvents() {
    if (this.menpo) {
      this.button.style.zIndex = -2;

      setTimeout(() => {
        this.homeMask.addEventListener('click', () => {
          if (this.counter === 1) {
            this.homeMask.style.display = 'none';

            this.item1.style.top = '-150%';
            this.item1.style.opacity = 0;
            this.item2.style.top = '50%';
            this.item2.style.opacity = 1;

            setTimeout(() => {
              this.resetTextAnim(this.item1);
              this.homeMask.style.display = 'block';
            }, 1500);

            return this.counter++;
          }
          if (this.counter === 2 && this.item1.style.opacity === '0') {
            this.homeMask.style.display = 'none';

            this.item2.style.top = '-150%';
            this.item2.style.opacity = 0;
            this.item3.style.top = '50%';
            this.item3.style.opacity = 1;

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 1500);

            return this.counter++;
          }
          if (this.counter === 3 && this.item2.style.opacity === '0') {
            this.homeMask.style.display = 'none';

            this.item3.style.top = '-150%';
            this.item3.style.opacity = 0;
            this.item4.style.top = '50%';
            this.item4.style.opacity = 1;

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 1500);

            return this.counter++;
          }
          if (this.counter === 4 && this.item3.style.opacity === '0') {
            this.homeMask.style.display = 'none';

            this.item4.style.top = '-150%';
            this.item4.style.opacity = 0;
            this.item1.style.top = '50%';
            this.item1.style.opacity = 1;

            this.resetTextAnim(this.item2);
            this.resetTextAnim(this.item3);

            this.buttonAnim(this.button);
            this.button.style.zIndex = 2;

            setTimeout(() => {
              this.resetTextAnim(this.item4);
              this.homeMask.style.display = 'block';
            }, 1500);

            return (this.counter = 1);
          }
        });
      }, 1500);
    }
  }

  redirect() {
    if (this.menpo) {
      this.button.addEventListener('click', () => {
        window.location.pathname = '/tengu';
      });
    }
  }
}
