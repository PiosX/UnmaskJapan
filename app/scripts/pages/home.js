import Animation from '../animations/animation';

export default class Home extends Animation {
  constructor() {
    super();
    this.hZen = document.querySelector('.home__main__img');
    this.hjTitleOni = document.querySelector('.hh__oni');
    this.hjTitleOniS = document.querySelector('.hh__oni--sh');
    this.heTitleOni = document.querySelector('.hhe__oni');
    this.animations();
  }

  animations() {
    this.hZenAnim(this.hZen);
    this.hjTitleAnimF(this.hjTitleOni);
    this.hjTitleAnimS(this.hjTitleOniS);
    this.heTitleAnim(this.heTitleOni);
  }

  addEvents() {}

  removeEvents() {}
}
