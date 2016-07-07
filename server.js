// node module import
var express = require('express');
var Crawler = require("crawler");
var cheerio = require('cheerio');
var url     = require('url');
var fs      = require('fs');


// web server setting
var app = express();


// routing configuration(default)
app.get('/', function (request, response) {
    fs.readFile('index.html', function(error, data){
        response.send(data.toString());
    });
})

// food info crawling
app.get('/food_info', function(request, response) {

    var crawling_data="";

    var crawler_obj = new Crawler({
        maxConnections	: 10,
        callback	: function(error, result, $){
                //to do
        }
    });

    crawler_obj.queue([{
        uri	: 'http://www.sdsfoodmenu.co.kr:9106/foodcourt/menuplanner/list',
        jQuery	: true,

        callback: function (error, result) {

            $ = cheerio.load(result.body, {
                normalizeWhitespace : true,
                xmlMode             : true
            });

            var isSuccess = true; //개발 중에는 false 처리. (추후에 결과값을 분석해서 true / false 판정 로직 추가)

            if(isSuccess){
                crawling_data = {
                                    "result_code" : "OK",
                                    "result_data" : [
                                        {
                                            "menu_nm_kr" : "정어리 숯불구이",
                                            "menu_nm_en" : "charcoal-broiled fish",
                                            "menu_cal"   : "552",
                                            "menu_cost"  : "3500",
                                            "img_src"    : "https://upload.wikimedia.org/wikipedia/en/1/13/Slime_%28Dragon_Quest%29.jpg"
                                        },
                                        {
                                           "menu_nm_kr" : "감자 샐러드",
                                            "menu_nm_en" : "potato salad",
                                            "menu_cal"   : "455",
                                            "menu_cost"  : "4500",
                                            "img_src"    : "https://upload.wikimedia.org/wikipedia/en/1/13/Slime_%28Dragon_Quest%29.jpg"
                                        },
                                        {
                                            "menu_nm_kr" : "생선회 와작와작",
                                            "menu_nm_en" : "sliced raw fish",
                                            "menu_cal"   : "770",
                                            "menu_cost"  : "7500",
                                            "img_src"    : "https://upload.wikimedia.org/wikipedia/en/1/13/Slime_%28Dragon_Quest%29.jpg"
                                        },
                                        {
                                            "menu_nm_kr" : "숲의 샐러드",
                                            "menu_nm_en" : "salad of forest",
                                            "menu_cal"   : "1200",
                                            "menu_cost"  : "8000",
                                            "img_src"    : "https://upload.wikimedia.org/wikipedia/en/1/13/Slime_%28Dragon_Quest%29.jpg"
                                        }
                                    ]
                                }
            }else{
                var span_data = $('table').find('span');

                //console.log($(span_data[i]).text());
                crawling_data = 
                {
                    "result_code"	: "FAIL",
                    "result_data"	: [
                        {
                            "text_kr"		: $(span_data[0]).text(),
                            "text_en"		: $(span_data[1]).text(),
                            "time_schedule"	: $(span_data[2]).text(),
                            "breakfast"		: $(span_data[3]).text(),
                            "lunch"		: $(span_data[4]).text(),
                            "dinner"		: $(span_data[5]).text()
                        }
                    ]
                }
            }
            //console.log(JSON.stringify(crawling_data));
            response.json(JSON.stringify(crawling_data));
        }
    }]);
/*
    var crawling_data = 
        {
            "result_code" : "FAIL",
            "result_data" : [
                {
                    "text_kr"       : "지금은 영업하지 않습니다",
                    "text_en"       : "We are closed now",
                    "time_schedule" : "운영시간 안내",
                    "breakfast"     : "아침 06:30 - 08:15",
                    "lunch"         : "아침 11:30 - 12:30",
                    "dinner"        : "저녁 18:00 - 19:00"
                }
            ]
        }
*/
//    response.json(JSON.stringify(crawling_data)); 
});


// start server
var server = app.listen(8081, function () {
  console.log("DELight server running on localhost:8081...");
})

