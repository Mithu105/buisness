$(document).ready(function () {
  // ============  waypoints for sticky navigatio  ============//
  $(".service").waypoint(function (direction) {
    if (direction == "down") {
      $("nav ").addClass("sticky");
    } else {
      $("nav ").removeClass("sticky");
    }
  });


  // ======= mixitup for portfolio section ========//
  var mixer = mixitup(".filter");
});

// ============ side navigation ==========//
function openNav() {
  document.getElementById("side-nav").style.width = " 100%";
}
function closeNav() {
  document.getElementById("side-nav").style.width = " 0%";
}


// =======  smooth scroll for IE / Safari / Ege ========//

$("a").on("click", function (event) {
  if (this.hash != "") {
    event.preventDefault();
    var hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});


$(function(){
  $('.circlechart').circlechart();
});