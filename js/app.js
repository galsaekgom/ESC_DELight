
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
        .append('<div class="menu-wrapper col-lg-3 col-xs-4">'+
                    '<div class="menu">'+
                        '<div class="store">'+(data.store || 'noname') +'</div>'+
                        '<div class="img">'+
                            '<img class="img-responsive center-block" src="'+data.img_src+'">'+
                        '</div>'+
                        '<div class="menu-text">'+
                            '<div class="cal right-block">'+data.menu_cal+'kcal</div>'+
                            '<div class="name">'+data.menu_nm_kr+'</div>'+
                        '</div>'+
                    '</div>'+
                '</div>');
}