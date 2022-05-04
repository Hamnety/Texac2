$(document).ready(function() {
    $(window).resize(function(){
      var windowWidth = $(window).width();
      if(windowWidth < 1020)$("body").addClass("design_portable");
      else $("body").removeClass("design_portable");
    });
  });