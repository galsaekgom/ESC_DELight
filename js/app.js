
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
                '<div class="img"><img src="http://dummyimage.com/100x70/a3a3a3/ffffff&text=no+image"/></div>' +
                '<div class="cal">'+data.cal+'kcal</div>' +
                '</div>')
}