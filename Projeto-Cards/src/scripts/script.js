$(document).ready(function(){
    $(".card__hidden").hide();
    $(".buy__hidden").hide();


    /* FUNÇÃO DO CLICK PARA MOSTRAR OS DETALHES DOS PRODUTOS  */
    $("[id^='details-']").click(function(){
        var id = $(this).attr('id').split('-')[1];
        $("#card__hidden" + id).show();
        $('body').css('overflow', 'hidden');
    });

    /*FUNÇÃO PARA O CLICK DO FECHAR */
    $(".__close").click(function(){
        $(".card__hidden").hide();
        $(".buy__hidden").hide();
        $('body').css('overflow', 'auto');
    });

    /* FUNÇÃO PARA O CLICK DO COMPRAR*/
    $("[class^='card__button']").click(function(){
        $(".buy__hidden").show();
        $('body').css('overflow', 'hidden');


        var prodImg = $(this).siblings("img").attr("src");
        $(".buy__content-aside-src").attr("src", prodImg);

        var prodNome = $(this).siblings(".card__title").text();
        $(".buy__content-aside-p").text(prodNome)

    });

    /*
    $("[id^='card-preco']").click(function(){
        var id = $(this).attr('id').split('-')[1];
        $("#card__hidden" + id).show();
        $('body').css('overflow', 'hidden');
    });
    */




});




