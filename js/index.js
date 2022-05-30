var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var isShowing = scrollToTopBtn.classList.contains('showBtn')
  var percentageScrolled = amountScrolled()

  if (percentageScrolled > 0.5 && !isShowing) { //Adjustable
    scrollToTopBtn.classList.add("showBtn");
  } else if (window.scrollY === 0) {
    if(isShowing) {
        scrollToTopBtn.classList.remove("showBtn");
    }
  }
}
function amountScrolled(){
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    
    var pctScrolled = scrollTop/trackLength // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
    return pctScrolled
}
 
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);