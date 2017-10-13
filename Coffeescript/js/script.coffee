counter = 0
TimerCounter = 0
$(document).ready ->
  $(window).scroll ->
    # get the element that you want check scrolling on it
    offSet = $('.crewMenu__progressBarsHolder').offset().top
    top = $(window).scrollTop() + $(window).height()
    if offSet <= top and counter == 0
      $('.progressBar').each ->
        progress = $(this)
        percentage = Math.ceil($(this).attr('data-percentage'))
        $(countNum: 0).animate { countNum: percentage },
          duration: 2000
          easing: 'swing'
          step: ->
            counter = 1
            pct = ''
            if percentage == 0
              pct = Math.floor(@countNum)
            else
              pct = Math.floor(@countNum + 1)
            progress.css 'width', pct + '%'

    # get the element that you want check scrolling on it
    offSet = $('.TimmerdivHolder').offset().top
    top = $(window).scrollTop() + $(window).height()
    if offSet <= top and TimerCounter == 0
      $('.Timmerdiv__number').each ->
        progress = $(this)
        percentage = Math.ceil($(this).attr('data-number'))
        $(countNum: 0).animate { countNum: percentage },
          duration: 5000
          easing: 'swing'
          step: ->
            TimerCounter = 1
            pct = ''
            if percentage == 0
              pct = Math.floor(@countNum)
            else
              pct = Math.floor(@countNum + 1)
            progress.text pct

$('.toggleBtn').click ->
  $('.header__search').toggle()
  return

$('#closeBtn').click ->
  $('.header__search__input').css 'width', '280px'
  return


scrollingUp = (className) ->
  $('html, body').animate { scrollTop: $(className).offset().top }, 2000
  return


$('.collective__link').click ->
  scrollingUp '.collectiveMenu'
  return

$('.articales__link').click ->
  scrollingUp '.articlesMenu'
  return

$('.crew__link').click ->
  scrollingUp '.crewMenu'
  return

$('.freebies__link').click ->
  scrollingUp '.FreshestFreebiesMenu'
  return

$('.subscribe__link').click ->
  scrollingUp '.getStarted'
  return

$('.header__search__input').focus ->
  $('.header__search__input').css 'width', '330px'
  return

slideIndex = 1

$('.firstSlide').click  ->
  slideIndex = 1
  showSlides 1

$('.secondSlide').click  ->
  slideIndex = 2
  showSlides 2

$('.thirdSlide').click  ->
  slideIndex = 3
  showSlides 3

showSlides = (n) ->
  i = undefined
  slides = $('.carousel-div')
  dots = $('.dot')
  if n > slides.length
    slideIndex = 1
  if n < 1
    slideIndex = slides.length
  i = 0
  while i < slides.length
    $(slides[i]).css 'display', 'none'
    i++
  i = 0
  while i < dots.length
    $(dots[i]).removeClass('active').addClass ''
    i++
  $(slides[slideIndex - 1]).css 'display', 'block'
  dots[slideIndex - 1].className += ' active'
  return

showSlides slideIndex