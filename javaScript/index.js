document.addEventListener("DOMContentLoaded", function() {
    // header e il bottone get e il div 
    var header = document.querySelector(".contenitoreHederESotto header");
    var bottoneGetStarted = document.querySelector("#getStarted");
    var targetDiv = document.querySelector(".inlineBlock");
  
    window.addEventListener('scroll', function() {
      // posizione dello scroll + la posizione finale del div
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var targetDivPosition = targetDiv.offsetTop + targetDiv.offsetHeight;
  
      // check se ci siamo
      if(scrollPosition >= targetDivPosition) {
          // agginge classe per cambiare all' header e al bottone 
        header.classList.add("headerScuro");
        bottoneGetStarted.classList.add("coloreBottoneGreen");
      } else {
          //rimuove le classi
        header.classList.remove("headerScuro");
        bottoneGetStarted.classList.remove("coloreBottoneGreen");
      }
    });
  });
  