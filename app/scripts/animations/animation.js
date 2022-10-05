import GSAP from 'gsap';

let flag = 0;

export default class Animation {
  titleAnim(titleL, titleP) {
    GSAP.fromTo(
      titleL,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 1 }
    );
    GSAP.fromTo(
      titleP,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 1 }
    );
  }

  zenAnim(zen) {
    GSAP.to(zen, {
      rotate: '-360deg',
      ease: 'linear',
      duration: 3,
      repeat: -1,
    });
  }

  preTextAnim(t1, t2, t3, t4, t5) {
    if (flag === 0) {
      GSAP.to(t1, { transform: 'translateX(0)', opacity: 1, duration: 1 });
      GSAP.to(t2, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1,
        delay: 1,
      });
      GSAP.to(t3, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1,
        delay: 1.5,
      });
      GSAP.to(t4, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1,
        delay: 2,
      });
      GSAP.to(t5, {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1,
        delay: 2.5,
      });
      return (flag = 1);
    } else {
      return 0;
    }
  }

  preArrowAnimIn(arrow) {
    GSAP.to(arrow, {
      transform: 'translate(-50%, -5%)',
      duration: 1,
    });
  }

  preArrowAnimOut(arrow) {
    GSAP.to(arrow, {
      transform: 'translate(-50%, -50%)',
      duration: 1,
    });
  }

  hZenAnim(zen) {
    GSAP.to(zen, {
      rotate: '360deg',
      ease: 'linear',
      duration: 16,
      repeat: -1,
    });
  }

  hjTitleAnimF(title) {
    GSAP.fromTo(
      title,
      { top: '-200%' },
      { top: '50%', duration: 1.5, delay: 0.5 }
    );
  }

  hjTitleAnimS(title) {
    GSAP.fromTo(
      title,
      { left: '13%', top: '50%', opacity: 0 },
      { left: '16.5%', top: '56%', opacity: 0.2, duration: 0.6, delay: 2 }
    );
  }

  heTitleAnim(title) {
    GSAP.fromTo(
      title,
      { transform: 'rotate(90deg) translateY(-200%)' },
      {
        display: 'block',
        transform: 'rotate(90deg) translateY(0)',
        duration: 0.6,
        delay: 2,
      }
    );
  }

  hjTitleAnimOut(title, titleS) {
    GSAP.to(title, {
      top: '180%',
      duration: 1.5,
    });
    GSAP.to(titleS, {
      top: '186%',
      duration: 1.5,
    });
  }

  heTitleAnimOut(title) {
    GSAP.to(title, {
      transform: 'rotate(90deg) translateY(450%)',
      zIndex: -1,
      display: 'none',
    });
  }

  htTitleAnimIn(title) {
    GSAP.to(title, {
      display: 'block',
      opacity: 1,
      duration: 2,
      delay: 1,
    });
  }

  htTitleAnimOut(title) {
    GSAP.to(title, {
      opacity: 0,
      duration: 0.5,
      display: 'none',
    });
  }

  resetTextAnim(text) {
    GSAP.to(text, {
      top: '120%',
      opacity: 0,
    });
  }

  jpTitleAnimation(title) {
    GSAP.fromTo(title, { top: '-50%' }, { top: '25%', duration: 1.5 });
  }

  enTitleAnimation(title) {
    GSAP.fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }

  buttonAnim(button) {
    GSAP.fromTo(button, { opacity: 0 }, { opacity: 1, duration: 1 });
  }
}
