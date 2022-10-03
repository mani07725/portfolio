// typing animation
var typed= new Typed(".typing",{
    strings:[ "Web Developer", "Computer System Engineer","Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
const nav= document.querySelector(".nav"),
navlist=nav.querySelectorAll("li"),
totalnavlist=navlist.length;
allsection= document.querySelectorAll("section"),
totalsection= allsection.length;
navbar= document.querySelector(".navbar").querySelectorAll("a");
navbar.forEach(element=>{
    element.addEventListener("click",function(){
      for(let i=0; i<totalsection; i++){
        allsection[i].classList.remove("back-section");
      }
        for(let j=0; j<totalnavlist; j++){
          if(navlist[j].querySelector("a").classList.contains("active")){
            allsection[j].classList.add("back-section");
          }
          navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1709){
          asidesectiontogglerbtn();
        }
    })
})
function updatenav(element){
  for(let i=0; i<totalnavlist; i++){
    navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target==navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function(){
  const sectionindex= this.getAttribute("data-section-index");
  showSection(this);
  updatenav(this);
})
function showSection(element) {
  for(let i=0; i<totalsection; i++){
    allsection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active");
}


// // scroll animation
// $(document).ready(function() {
//     $(document).on("scroll", onScroll);
  
//     //smoothscroll
//     $('a[href^="#"]').on('click', function(e) {
//       e.preventDefault();
//       $(document).off("scroll");
  
//       $('a').each(function() {
//         $(this).removeClass('active');
//       })
//       $(this).addClass('active');
  
//       var target = this.hash,
//         menu = target;
//       $target = $(target);
//       $('html, body').stop().animate({
//         'scrollTop': $target.offset().top + 2
//       }, 600, 'swing', function() {
//         window.location.hash = target;
//         $(document).on("scroll", onScroll);
//       });
//     });
//   });
  
//   function onScroll(event) {
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function() {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//         $('#menu-center ul li a').removeClass("active");
//         currLink.addClass("active");
//       } else {
//         currLink.removeClass("active");
//       }
//     });
//   }
  // aside 

    // for(let i=0; i<totalnavlist; i++) {
    //   const a = navlist[i].querySelector("a");
    //   a.addEventListener("click",function() {

    //     this.classList.add("active");
    //   })
      
    // }
const navtogglerbtn= document.querySelector(".nav-toggler"),
  aside= document.querySelector(".aside");
  navtogglerbtn.addEventListener("click",function() {
    asidesectiontogglerbtn();
  })
  function asidesectiontogglerbtn(){
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for(let i=0;i<totalsection; i++){
      allsection[i].classList.toggle("open");
    }
  }