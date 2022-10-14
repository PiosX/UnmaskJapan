import Animation from '../animations/animation';

export default class Home extends Animation {
  constructor() {
    super();
    this.counter = 1;

    this.cursor = document.querySelector('.inner__cursor');

    this.home = document.querySelector('.home');
    this.homeMask = document.querySelector('.home__mask');
    this.hZen = document.querySelector('.home__main__img');

    this.hjTitleOni = document.querySelector('.hh__oni');
    this.hjTitleOniS = document.querySelector('.hh__oni--sh');
    this.heTitleOni = document.querySelector('.hhe__oni');
    this.htTitleOni = document.querySelector('.ht__oni');

    this.hjTitleHannya = document.querySelector('.hh__hannya');
    this.hjTitleHannyaS = document.querySelector('.hh__hannya--sh');
    this.heTitleHannya = document.querySelector('.hhe__hannya');
    this.htTitleHannya = document.querySelector('.ht__hannya');

    this.hjTitleMenpo = document.querySelector('.hh__menpo');
    this.hjTitleMenpoS = document.querySelector('.hh__menpo--sh');
    this.heTitleMenpo = document.querySelector('.hhe__menpo');
    this.htTitleMenpo = document.querySelector('.ht__menpo');

    this.hjTitleTengu = document.querySelector('.hh__tengu');
    this.hjTitleTenguS = document.querySelector('.hh__tengu--sh');
    this.heTitleTengu = document.querySelector('.hhe__tengu');
    this.htTitleTengu = document.querySelector('.ht__tengu');

    this.animations();
    this.addEvents();
    this.redirect();
  }

  animations() {
    this.hZenAnim(this.hZen);
    this.hjTitleAnimS(this.hjTitleOniS);
    this.heTitleAnim(this.heTitleOni);
    this.htTitleAnimIn(this.htTitleOni);

    if (window.innerWidth <= 768) {
      this.hjTitleAnimFMobile(this.hjTitleOni);
    } else {
      this.hjTitleAnimF(this.hjTitleOni);
    }
  }

  addEvents() {
    if (this.home) {
      setTimeout(() => {
        this.homeMask.addEventListener('click', () => {
          if (this.counter === 1) {
            this.homeMask.style.display = 'none';

            if (window.innerWidth <= 768) {
              this.hjTitleAnimOutMobile(this.hjTitleOni);
            } else {
              this.homeMask.style.display = this.hjTitleAnimOut(
                this.hjTitleOni,
                this.hjTitleOniS
              );
            }

            this.heTitleAnimOut(this.heTitleOni);
            this.htTitleAnimOut(this.htTitleOni);

            if (window.innerWidth <= 768) {
              this.hjTitleAnimFMobile(this.hjTitleHannya);
            } else {
              this.hjTitleAnimF(this.hjTitleHannya);
            }
            this.hjTitleAnimS(this.hjTitleHannyaS);
            this.htTitleAnimIn(this.htTitleHannya);
            this.heTitleAnim(this.heTitleHannya);

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 2500);

            return this.counter++;
          }
          if (this.counter === 2) {
            this.homeMask.style.display = 'none';

            if (window.innerWidth <= 768) {
              this.hjTitleAnimOutMobile(this.hjTitleHannya);
            } else {
              this.homeMask.style.display = this.hjTitleAnimOut(
                this.hjTitleHannya,
                this.hjTitleHannyaS
              );
            }
            this.heTitleAnimOut(this.heTitleHannya);
            this.htTitleAnimOut(this.htTitleHannya);

            if (window.innerWidth <= 768) {
              this.hjTitleAnimFMobile(this.hjTitleMenpo);
            } else {
              this.hjTitleAnimF(this.hjTitleMenpo);
            }
            this.hjTitleAnimS(this.hjTitleMenpoS);
            this.htTitleAnimIn(this.htTitleMenpo);
            this.heTitleAnim(this.heTitleMenpo);

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 2500);

            return this.counter++;
          }
          if (this.counter === 3) {
            this.homeMask.style.display = 'none';
            if (window.innerWidth <= 768) {
              this.hjTitleAnimOutMobile(this.hjTitleMenpo);
            } else {
              this.homeMask.style.display = this.hjTitleAnimOut(
                this.hjTitleMenpo,
                this.hjTitleMenpoS
              );
            }

            this.heTitleAnimOut(this.heTitleMenpo);
            this.htTitleAnimOut(this.htTitleMenpo);

            if (window.innerWidth <= 768) {
              this.hjTitleAnimFMobile(this.hjTitleTengu);
            } else {
              this.hjTitleAnimF(this.hjTitleTengu);
            }
            this.hjTitleAnimS(this.hjTitleTenguS);
            this.htTitleAnimIn(this.htTitleTengu);
            this.heTitleAnim(this.heTitleTengu);

            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 2500);

            return this.counter++;
          }
          if (this.counter === 4) {
            this.homeMask.style.display = 'none';

            if (window.innerWidth <= 768) {
              this.hjTitleAnimOutMobile(this.hjTitleTengu);
            } else {
              this.homeMask.style.display = this.hjTitleAnimOut(
                this.hjTitleTengu,
                this.hjTitleTenguS
              );
            }
            this.heTitleAnimOut(this.heTitleTengu);
            this.htTitleAnimOut(this.htTitleTengu);

            if (window.innerWidth <= 768) {
              this.hjTitleAnimFMobile(this.hjTitleOni);
            } else {
              this.hjTitleAnimF(this.hjTitleOni);
            }
            this.hjTitleAnimS(this.hjTitleOniS);
            this.htTitleAnimIn(this.htTitleOni);
            this.heTitleAnim(this.heTitleOni);
            setTimeout(() => {
              this.homeMask.style.display = 'block';
            }, 2500);

            return (this.counter = 1);
          }
        });
      }, 2500);
    }
  }

  redirect() {
    if (this.home) {
      this.htTitleOni.addEventListener('click', () => {
        window.location.pathname = '/oni';
      });

      this.htTitleHannya.addEventListener('click', () => {
        window.location.pathname = '/hannya';
      });

      this.htTitleMenpo.addEventListener('click', () => {
        window.location.pathname = '/menpo';
      });

      this.htTitleTengu.addEventListener('click', () => {
        window.location.pathname = '/tengu';
      });
    }
  }
}
