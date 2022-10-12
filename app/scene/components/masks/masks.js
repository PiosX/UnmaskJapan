import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';
import GSAP from 'gsap';
import * as THREE from 'three';

async function loadMasks() {
  const loader = new GLTFLoader();
  const newMaterial = new THREE.TextureLoader().load(
    'https://images.prismic.io/unmaskjapan/39c2fdb7-8320-49ef-8fce-40d09ec95b12_Silver.png?auto=compress,format'
  );
  const matCap = new THREE.MeshMatcapMaterial({ matcap: newMaterial });
  const homeMask = document.querySelector('.home__mask');
  let counter = 0;

  const pHome = document.querySelector('.home');
  const pOni = document.querySelector('.oni');
  const pHannya = document.querySelector('.hannya');
  const pMenpo = document.querySelector('.menpo');
  const pTengu = document.querySelector('.tengu');

  const [oniData, hannyaData, menpoData, tenguData] = await Promise.all([
    loader.loadAsync('oni.glb'),
    loader.loadAsync('hannya.glb'),
    loader.loadAsync('menpo.glb'),
    loader.loadAsync('tengu.glb'),
  ]);

  const oni = setupModel(oniData);

  oni.scale.multiplyScalar(0.022);
  oni.getObjectByName('Object_2').material = matCap;
  oni.getObjectByName('Object_3').material = matCap;
  oni.getObjectByName('Object_4').material = matCap;
  oni.getObjectByName('Object_5').material = matCap;
  oni.getObjectByName('Object_6').material = matCap;

  const hannya = setupModel(hannyaData);

  hannya.scale.multiplyScalar(14.0);
  hannya.getObjectByName('defaultMaterial').material = matCap;
  hannya.getObjectByName('defaultMaterial_1').material = matCap;

  const menpo = setupModel(menpoData);

  menpo.scale.multiplyScalar(0.24);
  menpo.getObjectByName('Mask_low_Mask_low_0').material = matCap;

  const tengu = setupModel(tenguData);

  tengu.scale.multiplyScalar(1);
  tengu.getObjectByName('pPlane1_lambert1_0').material = matCap;

  if (pHome || pOni) {
    oni.position.set(0, 0, 0);
    hannya.position.set(25, -2, 1);
    menpo.position.set(50, 0.5, 0);
    tengu.position.set(75, -2.2, 2);
  }
  if (pHannya) {
    oni.position.set(25, 0, 0);
    hannya.position.set(0, -2, 1);
    menpo.position.set(50, 0.5, 0);
    tengu.position.set(75, -2.2, 2);
  }
  if (pMenpo) {
    oni.position.set(25, 0, 0);
    hannya.position.set(25, -2, 1);
    menpo.position.set(0, 0.5, 0);
    tengu.position.set(75, -2.2, 2);
  }
  if (pTengu) {
    oni.position.set(25, 0, 0);
    hannya.position.set(25, -2, 1);
    menpo.position.set(50, 0.5, 0);
    tengu.position.set(0, -2.2, 2);
  }

  homeMask.addEventListener('click', () => {
    if (pHome) {
      if (counter === 0) {
        GSAP.to(oni.position, { x: -25, duration: 2 });
        GSAP.to(hannya.position, { x: 0, duration: 2 });
        setTimeout(() => {
          oni.position.x = 25;
        }, 2000);
        return counter++;
      }
      if (counter === 1) {
        GSAP.to(hannya.position, { x: -25, duration: 2 });
        GSAP.to(menpo.position, { x: 0, duration: 2 });
        setTimeout(() => {
          hannya.position.x = 25;
        }, 2000);
        return counter++;
      }
      if (counter === 2) {
        GSAP.to(menpo.position, { x: -25, duration: 2 });
        GSAP.to(tengu.position, { x: 0, duration: 2 });
        setTimeout(() => {
          menpo.position.x = 50;
        }, 2000);
        return counter++;
      }
      if (counter === 3) {
        GSAP.to(tengu.position, { x: -25, duration: 2 });
        GSAP.to(oni.position, { x: 0, duration: 2 });
        setTimeout(() => {
          tengu.position.x = 75;
        }, 2000);

        return (counter = 0);
      }
    }
  });

  return { oni, hannya, menpo, tengu };
}

export { loadMasks };
