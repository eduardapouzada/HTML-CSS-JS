document.addEventListener('DOMContentLoaded', function() {

//! Biblioteca Swiper, slides 
    alert("Esta carregando o script")
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 600,
    });

//! Bloquear a rolagem em telas menores
   /* document.body.classList.add('no-scroll');
    
    window.addEventListener('scroll', function() {
        window.scrollTo(0, 0);
    });
    
    
    document.addEventListener('DOMContentLoaded', function() {
        // Adiciona uma classe ao body para aplicar estilos CSS que bloqueiem a rolagem horizontal
        document.body.classList.add('no-horizontal-scroll');
        
        // Verifica e bloqueia a rolagem horizontal
        window.addEventListener('scroll', function() {
          // Mantém a posição vertical atual
          let scrollTop = window.scrollY;
          // Rola para a mesma posição vertical mas com scrollLeft igual a 0 para evitar a rolagem horizontal
          window.scrollTo(0, scrollTop);
        });
      });

    */

    
      

//! Mudar o Placeholder em telas menores    
    function changePlaceholder() {
        var input = document.getElementById('myInput');
        if (input) {
            if (window.innerWidth <= 767) {
                input.placeholder = 'Buscar no Shoes Shack.';
            } else {
                input.placeholder = 'O que você está procurando?';
            }
        } else {
            console.error('Elemento com ID "myInput" não encontrado');
        }
    }

    window.addEventListener('resize', changePlaceholder);
    window.addEventListener('load', changePlaceholder);

    
    changePlaceholder();
});
