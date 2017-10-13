counter=0;
TimerCounter=0;
$(document).ready(function () {
    $(window).scroll(function () {
        // function for progress Bar
        var off = $(".crewMenu__progressBarsHolder").offset().top; 
        var top = $(window).scrollTop() + $(window).height();
        if (off <= top && counter==0) {
          $('.progressBar').each(function () {
            var progress = $(this);
            var percentage = Math.ceil($(this).attr('data-percentage'));
            $({countNum: 0}).animate({countNum: percentage}, {
               duration: 2000,
               easing:'swing',
               step: function() {
                  counter=1;
                  var pct = '';
                  if(percentage == 0){
                    pct = Math.floor(this.countNum) + '%';
                  }else{
                    pct = Math.floor(this.countNum+1) + '%';
                  }
                  progress.css('width',pct);
                }
            });
          });
        }

        //function for counter
        var off = $(".TimmerdivHolder").offset().top; 
        var top = $(window).scrollTop() + $(window).height();
        if (off <= top && TimerCounter==0) {
            $('.Timmerdiv__number').each(function () {
              var progress = $(this);
              var percentage = Math.ceil($(this).attr('data-number'));
              $({countNum: 0}).animate({countNum: percentage}, {
                duration: 5000,
                easing:'swing',
                step: function() {
                TimerCounter=1;
                var pct = '';
                if(percentage == 0){
                  pct = Math.floor(this.countNum);
                }else{
                  pct = Math.floor(this.countNum+1);
                }
                progress.text(pct)
                }
              });
            }); 
        }



    });
});



//function for hide and display search div
$('.toggleBtn').click(function(){
  $('.header__search').toggle();
})

//function for reset width of input search 
$('#closeBtn').click(function(){
  $(".header__search__input").css('width','280px');
})


/*--------------------function for scrolling up the menu div-----------------------------*/
function scrollingUp(className){
$('html, body').animate({
        scrollTop: $(className).offset().top
    }, 2000);
}

$(".collective__link").click(function() {
  scrollingUp(".collectiveMenu");
});

$(".articales__link").click(function() {
    scrollingUp(".articlesMenu");
});

$(".crew__link").click(function() {
    scrollingUp(".crewMenu");
});

$(".freebies__link").click(function() {
    scrollingUp(".FreshestFreebiesMenu");
});

$(".subscribe__link").click(function() {
    scrollingUp(".getStarted");
});

//function for increase width of input when it is clicked
$(".header__search__input").focus(function(){

  $(".header__search__input").css('width','330px');
});


var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".carousel-div");
  var dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      $(slides[i]).css("display","none");  
  }
  for (i = 0; i < dots.length; i++) {
     $(dots[i]).removeClass('active').addClass('');
  }
  $(slides[slideIndex-1]).css("display","block");  
     dots[slideIndex-1].className += " active";
}
