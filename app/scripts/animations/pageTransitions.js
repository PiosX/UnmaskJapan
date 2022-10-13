import GSAP from 'gsap';

export default class PageTransitions {
  interpageTransitionOut(page) {
    GSAP.fromTo(
      page,
      { transform: `translateY(0)`, transformOrigin: 'bottom' },
      {
        transformOrigin: 'bottom',
        duration: 2,
        transform: `translateY(100%)`,
        delay: 1,
        display: 'none',
      }
    );
  }
}
