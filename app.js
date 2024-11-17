// const qwert = () => {
//   let tl = gsap.timeline();
//   tl.from('header .logo img, header ul li, header .phone', {
//     y: -20,
//     opacity: 0,
//     duration: 0.8,
//     delay: 1,
//     stagger: 0.2,
//   });
//   tl.from('main .m', {
//     duration: 0.5,
//     opacity: 0,
//   });
//   tl.from(
//     '.right-section',
//     {
//       x: 200,
//       duration: 0.5,
//       opacity: 0,
//     },
//     '-=1',
//   );
// };
// qwert();

// const cartOneRight = document.querySelector('.info_cart_right .cart');
// const cartOneLeft = document.querySelector('.info_cart_right .info');
// //
// const cartTwoRight = document.querySelector('.info_cart_right .two_info_title');
// const cartTwoLeft = document.querySelector('.info_cart_right .cart_right');

// //
// const cartThreeRight = document.querySelector('.info_cart_right .right-movement');
// const cartThreeLeft = document.querySelector('.info_cart_right .left-movement');

// const mainAnimation = (cartOneRight, cartOneLeft, cartTwoRight, cartTwoLeft) => {
//   let tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.info',
//       scroller: 'body',
//       start: 'top 30%',
//       end: 'top 10',
//       scrub: 1,
//       markers: true,
//     },
//   });

//   tl2.from(
//     cartOneRight,
//     {
//       x: 500,
//       opacity: 0,
//       duration: 2,
//       delay: 1,
//     },
//     'animation1',
//   );
//   tl2.from(
//     cartOneLeft,
//     {
//       x: -500,
//       opacity: 0,
//       duration: 2,
//       delay: 1,
//     },
//     'animation1',
//   );
//   tl2.from(
//     cartTwoRight,
//     {
//       x: 500,
//       opacity: 0,
//       duration: 2,
//       delay: 1,
//     },
//     'animation2',
//   );
//   tl2.from(
//     cartTwoLeft,
//     {
//       x: -500,
//       opacity: 0,
//       duration: 2,
//       delay: 1,
//     },
//     'animation2',
//   );
// };

// mainAnimation(cartOneRight, cartOneLeft, cartTwoRight, cartTwoLeft);
// // if (window.innerWidth >= 1920) {
// //   tl.from('header .logo img, header ul li, header .phone', {
// //     y: -20,
// //     opacity: 0,
// //     duration: 0.8,
// //     delay: 1,
// //     stagger: 0.2,
// //   });
// // } else if (window.innerWidth >= 1024) {

// //   tl.from('header .logo img, header ul li, header .phone', {
// //     y: 20,
// //     opacity: 0,
// //     duration: 0.8,
// //     delay: 1,
// //     stagger: 0.2,
// //   });
// // }
