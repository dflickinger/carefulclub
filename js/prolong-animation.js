$(".ac-subject").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("animatedcolor")  
})

$(".ac-subject").hover(function(){
  $(this).addClass("animatedcolor");        
})