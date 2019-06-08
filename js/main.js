$(".work-text").click(function(){
  $(".play").removeClass("show").addClass("hide");
  $(".play-text>a>img").addClass("opacity");
  $(".about").removeClass("show").addClass("hide");
  $(".about-text>a>img").addClass("opacity");
  $(".work").removeClass("hide").addClass("show")
  $(".work-text>a>img").removeClass("opacity");
});

$(".play-text").click(function(){
  $(".work").removeClass("show").addClass("hide");
  $(".work-text>a>img").addClass("opacity");
  $(".about").removeClass("show").addClass("hide");
  $(".about-text>a>img").addClass("opacity");
  $(".play").removeClass("hide").addClass("full-opacity");
  $(".play-text>a>img").removeClass("opacity");
});

$(".about-text").click(function(){
  $(".work").removeClass("show").addClass("hide");
  $(".work-text>a>img").addClass("opacity");
  $(".play").removeClass("show").addClass("hide");
  $(".play-text>a>img").addClass("opacity");
  $(".about").removeClass("hide").addClass("show");
  $(".about-text>a>img").removeClass("opacity");
});

$(document).ready(function() {
  $(".play").removeClass("show").addClass("hide");
  $(".play-text>a>img").addClass("opacity");
  $(".about").removeClass("show").addClass("hide");
  $(".about-text>a>img").addClass("opacity");
  $(".work").removeClass("hide").addClass("show")
  $(".work-text>a>img").removeClass("opacity");
});
