import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

// import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import Resizer from './systems/resizer.js';
import Loop from './systems/loop.js';

let scene;

let renderer;
let loop;

export default class World {
  constructor(container) {
    this.camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    this.mousePosX = 0;
    this.mousePosY = 0;
    this.paramsIntensify = 0.008;
    this.paramsEase = 0.008;
    this.initZ = this.camera.position.z;
    loop = new Loop(this.camera, scene, renderer);
    container.append(renderer.domElement);

    // const controls = createControls(this.camera, renderer.domElement);

    const cube = createCube();
    const { light, ambientLight } = createLights();

    // loop.updatables.push(controls);

    scene.add(cube, light, ambientLight);

    this.camParallax();

    const resizer = new Resizer(container, this.camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  camParallax() {
    window.addEventListener('mousemove', (e) => {
      this.mousePosX =
        (e.clientX - window.innerWidth / 2) * this.paramsIntensify;
      this.mousePosY =
        (e.clientY - window.innerHeight / 2) * this.paramsIntensify;

      this.camera.position.x +=
        (this.mousePosX - this.camera.position.x) * this.paramsEase;
      this.camera.position.y +=
        (this.mousePosY - this.camera.position.y) * this.paramsEase;
      this.camera.position.z +=
        (this.initZ - this.camera.position.z) * this.paramsEase;
      this.camera.lookAt(0, 0, 0);
    });
  }

  render() {
    // draw a single frame
    renderer.render(scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
