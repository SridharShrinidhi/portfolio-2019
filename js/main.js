$(".work-text").click(function(){
  $(".play").removeClass("show").addClass("hide");
  $(".about").removeClass("show").addClass("hide");
  $(".work").removeClass("hide").addClass("show");
});

$(".play-text").click(function(){
  $(".work").removeClass("show").addClass("hide");
  $(".about").removeClass("show").addClass("hide");
  $(".play").removeClass("hide").addClass("full-opacity");
});

$(".about-text").click(function(){
  $(".work").removeClass("show").addClass("hide");
  $(".play").removeClass("show").addClass("hide");
  $(".about").removeClass("hide").addClass("show");
});
