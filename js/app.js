
$(function(){
    $.getJSON('test/data.json', function(data){
        $.each(data, function(idx, elem){
            drawMenu(elem)
        })
    });
});


function drawMenu(data){
    $('.menulist')
        .append('<div class="menu row">'+
            '<div class="store col-md-12"><h3>'+data.store+'</h3></div>' +
            '<div class="img col-xs-4 col-sm-4"><img src="http://dummyimage.com/100x70/a3a3a3/ffffff&text=no+image"/></div>'+
            '<div class="name col-xs-6 col-sm-4">'+data.name+'<br/>'+data.cal+'kcal</div>' +
            '</div>')
}