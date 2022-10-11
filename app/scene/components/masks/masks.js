import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadMasks() {
  const loader = new GLTFLoader();

  const [oniData, hannyaData, menpoData, tenguData] = await Promise.all([
    loader.loadAsync('oni.glb'),
    loader.loadAsync('hannya.glb'),
    loader.loadAsync('menpo.glb'),
    loader.loadAsync('tengu.glb'),
  ]);

  const oni = setupModel(oniData);
  oni.position.set(0, 0, 0);
  oni.scale.multiplyScalar(0.022);

  const hannya = setupModel(hannyaData);
  hannya.position.set(25, -2, 1);
  hannya.scale.multiplyScalar(16.0);

  const menpo = setupModel(menpoData);
  menpo.position.set(50, 0.5, 0);
  menpo.scale.multiplyScalar(0.24);

  const tengu = setupModel(tenguData);
  tengu.position.set(75, -2, 2);
  tengu.scale.multiplyScalar(1);

  return { oni, hannya, menpo, tengu };
}

export { loadMasks };
