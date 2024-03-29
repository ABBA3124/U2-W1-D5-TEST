  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".contenitoreHederESotto header");
    var targetDiv = document.querySelector(".inlineBlock");

    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var targetDivPosition = targetDiv.offsetTop + targetDiv.offsetHeight;
      
      if(scrollPosition >= targetDivPosition) {
        header.classList.add("headerScuro");
      } else {
        header.classList.remove("headerScuro");
      }
    });
  });
