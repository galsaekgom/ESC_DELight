var Crawler = require("crawler");
var url = 'http://www.sdsfoodmenu.co.kr:9106/foodcourt/menuplanner/list';

var c = new Crawler({
    "maxConnections":10,

    // This will be called for each crawled page
    "callback":function(error,result,$) {
    
        // $ is a jQuery instance scoped to the server-side DOM of the page
        $("#content a").each(function(index,a) {
            c.queue(a.href);
        });
        
        //console.log(result.body)
        
        if(result){
            var page = result.body;
            var res = page.match(/location/i);
            //var res = page.match(/helton/g);
            if(res && res.length >0) {
                console.log(result.body);
            }
            
//            $('a').each(function(index, a) {
//                var aHref = a.href;
//                console.log(aHref);
//                c.queue(aHref);
//            });
        
        }
    }
});

c.queue(url);
