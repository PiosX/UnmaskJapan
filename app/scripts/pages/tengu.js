import Animation from '../animations/animation';

export default class Tengu extends Animation {
  constructor() {
    super();
    this.counter = 1;
    this.tengu = document.querySelector('.tengu');
    this.homeMask = document.querySelector('.home__mask');
    this.item1 = document.querySelector('.tengu-item-1');
    this.item2 = document.querySelector('.tengu-item-2');
    this.item3 = document.querySelector('.tengu-item-3');
    this.item4 = document.querySelector('.tengu-item-4');
    this.item5 = document.querySelector('.tengu-item-5');
    this.item6 = document.querySelector('.tengu-item-6');
    this.button = document.querySelector('.component__button');
    this.jpTengu = document.querySelector('.tengu__content__title');
    this.enTengu = document.querySelector('.tengu__title-en');
    this.animations();
    this.addEvents();
  }

  animations() {
    this.jpTitleAnimation(this.jpTengu);
    this.enTitleAnimation(this.enTengu);
  }

  addEvents() {
    if (this.tengu) {
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
            this.item5.style.top = '50%';
            this.item5.style.opacity = 1;

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 1500);

            return this.counter++;
          }
          if (this.counter === 5 && this.item4.style.opacity === '0') {
            this.homeMask.style.display = 'none';

            this.item5.style.top = '-150%';
            this.item5.style.opacity = 0;
            this.item1.style.top = '50%';
            this.item1.style.opacity = 1;

            this.resetTextAnim(this.item2);
            this.resetTextAnim(this.item3);
            this.resetTextAnim(this.item4);

            this.buttonAnim(this.button);
            this.button.style.zIndex = 2;

            setTimeout(() => {
              this.resetTextAnim(this.item5);
              this.homeMask.style.display = 'block';
            }, 1500);

            return (this.counter = 1);
          }
        });
      }, 1500);
    }
  }
}
