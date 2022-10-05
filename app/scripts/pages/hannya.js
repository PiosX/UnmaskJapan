import Animation from '../animations/animation';

export default class Hannya extends Animation {
  constructor() {
    super();
    this.counter = 1;
    this.hannya = document.querySelector('.hannya');
    this.homeMask = document.querySelector('.home__mask');
    this.item1 = document.querySelector('.hannya-item-1');
    this.item2 = document.querySelector('.hannya-item-2');
    this.item3 = document.querySelector('.hannya-item-3');
    this.button = document.querySelector('.component__button');
    this.jpHannya = document.querySelector('.hannya__content__title');
    this.enHannya = document.querySelector('.hannya__title-en');
    this.animations();
    this.addEvents();
    this.redirect();
  }

  animations() {
    this.jpTitleAnimation(this.jpHannya);
    this.enTitleAnimation(this.enHannya);
  }

  addEvents() {
    if (this.hannya) {
      this.button.style.zIndex = -2;

      setTimeout(() => {
        this.homeMask.addEventListener('click', () => {
          if (this.counter === 1) {
            this.homeMask.style.display = 'none';

            this.item1.style.top = '-150%';
            this.item1.style.opacity = 0;
            this.item2.style.top = '50%';
            this.item2.style.opacity = 1;
            this.resetTextAnim(this.item3);

            setTimeout(() => {
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
            this.resetTextAnim(this.item1);

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 1500);

            return this.counter++;
          }
          if (this.counter === 3 && this.item2.style.opacity === '0') {
            this.homeMask.style.display = 'none';

            this.item3.style.top = '-150%';
            this.item3.style.opacity = 0;
            this.item1.style.top = '50%';
            this.item1.style.opacity = 1;

            this.buttonAnim(this.button);
            this.button.style.zIndex = 2;
            this.resetTextAnim(this.item2);
            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 1500);

            return (this.counter = 1);
          }
        });
      }, 1500);
    }
  }

  redirect() {
    if (this.hannya) {
      this.button.addEventListener('click', () => {
        window.location.pathname = '/menpo';
      });
    }
  }
}
