document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let slideAtual = 0;
  
    function ProximoSlide() {
      slides[slideAtual].style.display = 'none';
      slideAtual = (slideAtual + 1) % slides.length;
      slides[slideAtual].style.display = 'block';
    }
  
    setInterval(ProximoSlide, 5000);
  });
  