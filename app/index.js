import Prehome from './scripts/pages/prehome';
import Home from './scripts/pages/home';
import Oni from './scripts/pages/oni';
import Hannya from './scripts/pages/hannya';
import Menpo from './scripts/pages/menpo';
import Tengu from './scripts/pages/tengu';

class App {
  constructor() {
    this.createPreloader();
    this.createPages();
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
}

// eslint-disable-next-line no-new
new App();
