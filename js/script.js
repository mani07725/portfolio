// typing animation
var typed= new Typed(".typing",{
    strings:["  ", "Web Developer", "Computer System Engineer","Freelancer"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})
navbar= document.querySelector(".navbar").querySelectorAll("a");
navbar.forEach(element=>{
    element.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classList.remove("active"));
        this.classList.add("active");
    })
})



// scroll animation
$(document).ready(function() {
    $(document).on("scroll", onScroll);
  
    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $('a').each(function() {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
  
      var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
      }, 600, 'swing', function() {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });
  
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu-center ul li a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  