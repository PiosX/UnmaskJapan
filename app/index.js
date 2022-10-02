import Prehome from './scripts/pages/prehome';
import Home from './scripts/pages/home';

class App {
  constructor() {
    this.createPreloader();
    this.createPages();
  }

  createPreloader() {}

  createPages() {
    this.prehome = new Prehome();
    this.home = new Home();
  }
}

// eslint-disable-next-line no-new
new App();
