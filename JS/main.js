
$(document).ready(function(){
  //alert("Native Plant Garden ");  //jQuery code here
    $("#hamburger, #close").click(function(){
      $(".main-nav").toggleClass("open-nav");
    });
});
$("nav a").click(function(e){
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });
  
});
