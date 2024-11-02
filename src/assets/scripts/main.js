/**
 * Import dependencies from node_modules
 * see commented examples below
 */
// import 'some-node-module';
// import SomeModule from 'some-node-module';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/**
 * Write any other JavaScript below
 */

+( function() {
  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} )();
