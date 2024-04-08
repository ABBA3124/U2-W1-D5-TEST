document.addEventListener("DOMContentLoaded", function() {
    // header e il bottone get e il div 
    const header = document.querySelector(".contenitoreHederESotto header")
    const bottoneGetStarted = document.querySelector("#getStarted")
    const targetDiv = document.querySelector(".inlineBlock")
  
    window.addEventListener('scroll', function() {
      // posizione dello scroll + la posizione finale del div
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      const targetDivPosition = targetDiv.offsetTop + targetDiv.offsetHeight
  
      // check se ci siamo
      if(scrollPosition >= targetDivPosition) {
          // agginge classe per cambiare all' header e al bottone 
        header.classList.add("headerScuro")
        bottoneGetStarted.classList.add("coloreBottoneGreen")
      } else {
          //rimuove le classi
        header.classList.remove("headerScuro")
        bottoneGetStarted.classList.remove("coloreBottoneGreen")
      }
    })
  })


  document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('svg g g path')

    setInterval(function() {
        paths.forEach(function(path) {
            const opacità = Math.random()
            path.style.opacity = opacità;
        })
    }, 700)
})








