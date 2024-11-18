document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
});

const headAndRightSection = () => {
  let tl = gsap.timeline();
  tl.from('header .logo img, header ul li, header .phone', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.2,
  });
  tl.from('main .m', {
    duration: 0.5,
    opacity: 0,
  });
  tl.from(
    '.right-section',
    {
      x: 200,
      duration: 0.5,
      opacity: 0,
    },
    '-=1',
  );
};
headAndRightSection();

const cartOneRight = document.querySelector('.info_cart .cart');
const cartOneLeft = document.querySelector('.info_cart .info');
//
const cartTwoRight = document.querySelector('.info_cart .two_info_title');
const cartTwoLeft = document.querySelector('.info_cart .cart_right');

const mainAnimation = (cartOneRight, cartOneLeft, cartTwoRight, cartTwoLeft) => {
  if (window.innerWidth > 500) {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.info',
        scroller: 'body',
        start: 'top 30%',
        end: 'top 10',
        scrub: 1,
      },
    });

    tl2.from(
      cartOneRight,
      {
        x: 500,
        opacity: 0,
        duration: 2,
        delay: 1,
      },
      'animation1',
    );
    tl2.from(
      cartOneLeft,
      {
        x: -500,
        opacity: 0,
        duration: 2,
        delay: 1,
      },
      'animation1',
    );
    tl2.from(
      cartTwoRight,
      {
        x: 500,
        opacity: 0,
        duration: 2,
        delay: 1,
      },
      'animation2',
    );
    tl2.from(
      cartTwoLeft,
      {
        x: -500,
        opacity: 0,
        duration: 2,
        delay: 1,
      },
      'animation2',
    );
  }
};
mainAnimation(cartOneRight, cartOneLeft, cartTwoRight, cartTwoLeft);
