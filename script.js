window.onload = function () {
    
    //Augmentar imatges
    let images = document.querySelectorAll("img");
      
        // Afegim un controlador d'esdeveniments a cadascuna
    images.forEach(image => {
        image.addEventListener("click", function() {
            // Afegir o treure la classe "big" quan es fa clic
        image.classList.toggle("big");
        });
        });
    }