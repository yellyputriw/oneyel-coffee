// const header = document.querySelector("header");
// const navToggle = document.querySelector(".nav-toggle");
// const wrapper = document.getElementById("wrapper");

// // sticky navbar
// window.addEventListener("scroll", function() {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// // responsive menu
// if (navToggle) {
//   navToggle.addEventListener("click", function(event) {
//     if (wrapper.className == "show") {
//       wrapper.className = "";
//     } else {
//       wrapper.className = "show";
//     }
//     event.preventDefault();
//   }, false);
// }

// // effect hamburger button
// navToggle.addEventListener("click", function() {
//   navToggle.classList.toggle("effect");
//   header.classList.add("sticky");
// });

// // smooth scroll
// function smoothScroll() {
//   const navLink = document.querySelectorAll(".nav-link");

//   for (let n in navLink) {
//     if (navLink.hasOwnProperty(n)){
//       navLink[n].addEventListener("click", function(event) {
//         event.preventDefault();

//         const target = document.querySelector(navLink[n].has);
//         const position = target.offsetTop - 100;

//         window.scrollTo({
//           top: position,
//           behavior: "smooth"
//         });
//       });
//     }
//   }
// }

// smoothScroll();

// // scroll spy
// function scrollspy() {
//   const sections = document.querySelectorAll('.spy');

//   window.onscroll = function() {
//     const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
//     for (let s in sections) {
//       if (sections.hasOwnProperty(s) && sections[s].offsetTop - 130 <= scrollPosition) {
//         const id = sections[s].id;
//         document.querySelector('.active').classList.remove('active');
//         document.querySelector(`a[href*=${id}]`).classList.add('active');
//       }
//     }
//   }
// }

// scrollspy();
