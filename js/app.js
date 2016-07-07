
$(function(){
    $.getJSON('test/success_data.json', function(data){
        console.log(data);
        $.each(data.result_data, function(idx, elem){
            drawMenu(elem);
        })
    });
});


function drawMenu(data){
    $('.menulist')
        .loadTemplate("templates/menu.tpl.html", data, {append:true});
}