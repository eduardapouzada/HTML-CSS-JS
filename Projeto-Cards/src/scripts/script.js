$(document).ready(function(){
    $(".card__hidden").hide();
    $(".buy__hidden").hide();


    $("[id^='details-']").click(function(){
        var id = $(this).attr('id').split('-')[1];
        $("#card__hidden" + id).show();
        $('body').css('overflow', 'hidden');
    });

    $(".__close").click(function(){
        $(".card__hidden").hide();
        $(".buy__hidden").hide();
        $('body').css('overflow', 'auto');
    });

    $("[class^='card__button']").click(function(){
        $(".buy__hidden").show();
    });

    $("[id^='card-precco']").click(function(){
        var id = $(this).attr('id').split('-')[1];
        $("#card__hidden" + id).show();
        $('body').css('overflow', 'hidden');
    });



});




