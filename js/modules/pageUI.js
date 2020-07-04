
function scrollSetPositionFixed() {
  $(window).scroll(function(){
     if ($(window).scrollTop() > $("#main-content").offset().top) {
       console.log("54656");
      $("#nav").addClass("position-fix");
     }
     else {
      $("#nav").removeClass("position-fix");
     }
  });
}


function setScrollTo(where){
  $("html, body").animate({scrollTop: where}, 500);
}