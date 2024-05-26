document.addEventListener('DOMContentLoaded', function() {

//! Bloquear a rolagem em telas menores
    document.body.classList.add('no-scroll');
    
    window.addEventListener('scroll', function() {
        window.scrollTo(0, 0);
    });

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
