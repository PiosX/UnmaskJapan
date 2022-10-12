import Prehome from './scripts/pages/prehome';
import Home from './scripts/pages/home';
import Oni from './scripts/pages/oni';
import Hannya from './scripts/pages/hannya';
import Menpo from './scripts/pages/menpo';
import Tengu from './scripts/pages/tengu';
import World from './scene/World';

class App {
  constructor() {
    this.cursor = document.querySelector('.inner__cursor');
    this.cursorAfter = document.querySelector('.inner__cursor__after');
    this.homeMask = document.querySelector('.home__mask');
    this.notCursor = document.querySelectorAll('.not-cursor');
    this.container = document.querySelector('.home__main__scene');
    this.oniContainer = document.querySelector('.oni__content__scene');
    this.hannyaContainer = document.querySelector('.hannya__content__scene');
    this.menpoContainer = document.querySelector('.menpo__content__scene');
    this.tenguContainer = document.querySelector('.tengu__content__scene');

    this.pHome = document.querySelector('.home');
    this.pOni = document.querySelector('.oni');
    this.pHannya = document.querySelector('.hannya');
    this.pMenpo = document.querySelector('.menpo');
    this.pTengu = document.querySelector('.tengu');

    this.createPreloader();
    this.createPages();
    this.cursorUpdate();
    this.cursorEvents();
    this.cursorOver();
    this.cursorOut();
    this.mainScene();
  }

  async mainScene() {
    if (this.pHome) {
      this.world = new World(this.container);
      await this.world.init();
      this.world.start();
    }
    if (this.pOni) {
      this.oniWorld = new World(this.oniContainer);
      await this.oniWorld.init();
      this.oniWorld.start();
    }
    if (this.pHannya) {
      this.hannyaWorld = new World(this.hannyaContainer);
      await this.hannyaWorld.init();
      this.hannyaWorld.start();
    }
    if (this.pMenpo) {
      this.menpoWorld = new World(this.menpoContainer);
      await this.menpoWorld.init();
      this.menpoWorld.start();
    }
    if (this.pTengu) {
      this.tenguWorld = new World(this.tenguContainer);
      await this.tenguWorld.init();
      this.tenguWorld.start();
    }
  }

  createPreloader() {}

  createPages() {
    this.prehome = new Prehome();
    this.home = new Home();
    this.oni = new Oni();
    this.hannya = new Hannya();
    this.menpo = new Menpo();
    this.tengu = new Tengu();
  }

  cursorUpdate() {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      this.cursor.style.left = `${x}px`;
      this.cursor.style.top = `${y}px`;
    });
  }

  cursorEvents() {
    this.homeMask.addEventListener('click', () => {
      this.cursorAfter.style.scale = '1';

      setTimeout(() => {
        this.cursorAfter.style.scale = '0';
      }, 400);
    });
  }

  cursorOver() {
    this.homeMask.addEventListener('mouseover', () => {
      this.cursor.style.display = 'block';
    });
  }

  cursorOut() {
    this.notCursor.forEach((cursor) => {
      cursor.addEventListener('mouseover', () => {
        this.cursor.style.display = 'none';
      });
    });
  }
}

// eslint-disable-next-line no-new
new App();
