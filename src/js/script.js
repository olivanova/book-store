svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $("№carousel").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }

      }, {

        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }

      }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

      }]
  });
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
