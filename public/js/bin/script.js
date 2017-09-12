$(document).ready(function(){
      $('.carousel').carousel({fullWidth: true,indicators:true});
      setInterval(function(){ $('.carousel').carousel('next')},3000);



      $("#scrollTo").click(function(e) {
          e.preventDefault();
     $('html, body').animate({
         scrollTop: $("#ideas").offset().top
     }, 2000);
 });
 $(document).ready(function(){
     $('.parallax').parallax();
   });

    });
