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
        $(".buy__content-aside-produto").text(prodNome)

        var prodPreco = $(this).siblings(".card__preco").text();
        $(".buy__content-aside-preco").text(prodPreco)

    });

    /* IMASK */
    var cpfMask = IMask($("#cpf")[0],{
        mask: '000.000.000-00'
    });

    var telMask = IMask($("#tel")[0],{
        mask: '(00) 00000-0000'
    });

    /* ENVIO DO FORM*/
    $("#submit").click(function(){

        var nome = $("#nome").val();
        var tel = $("#tel").val();
        var cpf = $("#cpf").val();
        var est = $("#est").val();
        var cid = $("#cid").val();
        var endereco = $("#endereco").val();

        if (!validar){

        }

    });


});




