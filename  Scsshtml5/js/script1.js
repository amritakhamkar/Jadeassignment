// Generated by CoffeeScript 2.0.1
(function() {
  var TimerCounter, counter, scrollingUp, showSlides, slideIndex;

  counter = 0;

  $(document).ready(function() {
    return $(window).scroll(function() {
      var offSet, top;
      // get the element that you want check scrolling on it
      offSet = $('.crewMenu__progressBarsHolder').offset().top;
      top = $(window).scrollTop() + $(window).height();
      if (offSet <= top && counter === 0) {
        return $('.progressBar').each(function() {
          var percentage, progress;
          progress = $(this);
          percentage = Math.ceil($(this).attr('data-percentage'));
          return $({
            countNum: 0
          }).animate({
            countNum: percentage
          }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
              var pct;
              counter = 1;
              pct = '';
              if (percentage === 0) {
                pct = Math.floor(this.countNum);
              } else {
                pct = Math.floor(this.countNum + 1);
              }
              return progress.css('width', pct + '%');
            }
          });
        });
      }
    });
  });

  TimerCounter = 0;

  $(document).ready(function() {
    $(window).scroll(function() {
      var offSet, top;
      // get the element that you want check scrolling on it
      offSet = $('.TimmerdivHolder').offset().top;
      top = $(window).scrollTop() + $(window).height();
      if (offSet <= top && TimerCounter === 0) {
        $('.Timmerdiv__number').each(function() {
          var percentage, progress;
          progress = $(this);
          percentage = Math.ceil($(this).attr('data-number'));
          $({
            countNum: 0
          }).animate({
            countNum: percentage
          }, {
            duration: 5000,
            easing: 'swing',
            step: function() {
              var pct;
              TimerCounter = 1;
              pct = '';
              if (percentage === 0) {
                pct = Math.floor(this.countNum);
              } else {
                pct = Math.floor(this.countNum + 1);
              }
              progress.text(pct);
            }
          });
        });
      }
    });
  });

  $('.toggleBtn').click(function() {
    $('.header__search').toggle();
  });

  $('#closeBtn').click(function() {
    $('.header__search__input').css('width', '280px');
  });

  scrollingUp = function(className) {
    $('html, body').animate({
      scrollTop: $(className).offset().top
    }, 2000);
  };

  $('.collective__link').click(function() {
    scrollingUp('.collectiveMenu');
  });

  $('.articales__link').click(function() {
    scrollingUp('.articlesMenu');
  });

  $('.crew__link').click(function() {
    scrollingUp('.crewMenu');
  });

  $('.freebies__link').click(function() {
    scrollingUp('.FreshestFreebiesMenu');
  });

  $('.subscribe__link').click(function() {
    scrollingUp('.getStarted');
  });

  $('.header__search__input').focus(function() {
    $('.header__search__input').css('width', '330px');
  });

  slideIndex = 1;

  $('.firstSlide').click(function() {
    slideIndex = 1;
    return showSlides(1);
  });

  $('.secondSlide').click(function() {
    slideIndex = 2;
    return showSlides(2);
  });

  $('.thirdSlide').click(function() {
    slideIndex = 3;
    return showSlides(3);
  });

  showSlides = function(n) {
    var dots, i, slides;
    i = void 0;
    slides = $('.carousel-div');
    dots = $('.dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    i = 0;
    while (i < slides.length) {
      $(slides[i]).css('display', 'none');
      i++;
    }
    i = 0;
    while (i < dots.length) {
      $(dots[i]).removeClass('active').addClass('');
      i++;
    }
    $(slides[slideIndex - 1]).css('display', 'block');
    dots[slideIndex - 1].className += ' active';
  };

  showSlides(slideIndex);

}).call(this);
