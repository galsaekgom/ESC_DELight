
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
        .append('<div class="menu row">'+
            '<div class="store col-md-12"><h3>'+(data.store || 'noname') +'</h3></div>' +
            '<div class="img col-xs-4 col-sm-4"><img src="'+data.img_src+'"/></div>'+
            '<div class="name col-xs-6 col-sm-4">'+data.menu_nm_kr+'<br/>'+data.menu_cal+'kcal</div>' +
            '</div>');
}