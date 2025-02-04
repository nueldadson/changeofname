
    {
    //This is the accordion script
    var acc = document.getElementsByClassName("home-section-faqs-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
    }


    {
        const delay = 3000; //ms
const carouselSlides = document.querySelector(".carouselSlides");
const carouselSlidesCount = carouselSlides.childElementCount;
const maxLeft = (carouselSlidesCount - 1) * 100 * -1;

let current = 0;

function switchSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  carouselSlides.style.left = current + "%";
}
let autoChange = setInterval(switchSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(switchSlide, delay);
};

// carouselControls
document.querySelector(".next-carouselSlide").addEventListener("click", function() {
  switchSlide();
  restart();
});

document.querySelector(".prev-carouselSlide").addEventListener("click", function() {
  switchSlide(false);
  restart();
});


    }
     