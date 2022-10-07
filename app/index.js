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
    this.createPreloader();
    this.createPages();
    this.cursorUpdate();
    this.cursorEvents();
    this.cursorOver();
    this.cursorOut();
    this.mainScene();
  }

  mainScene() {
    this.world = new World(this.container);

    this.world.render();
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
