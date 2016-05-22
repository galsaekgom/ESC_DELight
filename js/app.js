
$(function(){
    $.getJSON('test/data.json', function(data){
        $.each(data, function(idx, elem){
            drawMenu(elem)
        })
    });
});


function drawMenu(data){
    $('section.menus')
        .append('<div class="menu">'+
                '<div class="store">'+data.store+'</div>' +
                '<div class="name">'+data.name+'</div>' +
                '<div class="cal">'+data.cal+'kcal</div>' +
                '</div>')
}