counter=0;
$(document).ready(function () {
    $(window).scroll(function () {
        // get the element that you want check scrolling on it
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
    });
});

TimerCounter=0;
$(document).ready(function () {
    $(window).scroll(function () {
        // get the element that you want check scrolling on it
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






$('#searchBtn').click(function(){
  $('.header__search').css('display','inline-block');
})

$('#closeBtn').click(function(){
  $('.header__search').css('display','none');

  $(".header__search__input").css('width','280px');
})

$(".collective__link").click(function() {
    $('html, body').animate({
        scrollTop: $(".collectiveMenu").offset().top
    }, 2000);
});

$(".articales__link").click(function() {
    $('html, body').animate({
        scrollTop: $(".articlesMenu").offset().top
    }, 2000);
});

$(".crew__link").click(function() {
    $('html, body').animate({
        scrollTop: $(".crewMenu").offset().top
    }, 2000);
});

$(".freebies__link").click(function() {
    $('html, body').animate({
        scrollTop: $(".FreshestFreebiesMenu").offset().top
    }, 2000);
});

$(".subscribe__link").click(function() {
    $('html, body').animate({
        scrollTop: $(".getStarted").offset().top
    }, 2000);
});

$(".header__search__input").focus(function(){

  $(".header__search__input").css('width','330px');
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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