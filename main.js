

/////////////////////////////////////////////////////////slide from right on scroll////////////////////////////////////////////////////////


$(window).on("load resize scroll", function() {
    $(".bg-static").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
 
      if (leftPosition<-144){
       
        $('.bg-move').css('transition','ease-in');
        $(this)
        .find(".bg-move")
        .css({ right: leftPosition });

      }else{
        if($(window).scrollTop()>900){
            
            $('.text0').css('opacity',1-$(window).scrollTop() / 1200);
            $('.text0').css('transition','all 0.1s ease-in-out');
            $('.bg-move').css('opacity',1-$(window).scrollTop() / 1200);
            $('.bg-move').css('transition','all 0.1s ease-in-out');
    
           
          }
          else{
            $('.text0').css('opacity','1');
            $('.bg-move').css('opacity','1');
          }
      }
      
      
      
    });
  });

/////////////////////////////////////////////////////////slide from left on scroll////////////////////////////////////////////////////////


  $(window).on("load resize scroll", function() {
    $(".bg-static1").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;

      if (leftPosition<-144){
        $('.bg-move1').css('opacity','1');
        $('.text1').css('opacity','1');
        $('.bg-move1').css('transition','ease-in');
        $(this)
        .find(".bg-move1")
        .css({ left: leftPosition });

      }else{
        
          if($(window).scrollTop()>1500){
             
            $('.text1').css('opacity',1-$(window).scrollTop() / 1800);
            $('.text1').css('transition','all 0.1s ease-in-out');
            $('.bg-move1').css('opacity',1-$(window).scrollTop() /1800);
            $('.bg-move1').css('transition','all 0.1s ease-in-out');
          }
          else{
            $('.text1').css('opacity','1');
            $('.bg-move1').css('opacity','1');
          }
        
      }
      
      
      
    });
  });
