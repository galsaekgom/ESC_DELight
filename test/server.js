var Crawler = require("crawler");
var url = require('url');
var cheerio = require('cheerio');


var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        $('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            c.queue(toQueueUrl);
        });
    }
});

// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'http://www.sdsfoodmenu.co.kr:9106/foodcourt/menuplanner/list',
    jQuery: true,

    // The global callback won't be called
    callback: function (error, result) {
	$ = cheerio.load(result.body, {
		normalizeWhitespace: true,
		xmlMode: true
	});


	var spans = $('table').find('span');

	for(var i=0 ; i<spans.length ; i++){
		console.log($(spans[i]).text());
	}
    }
}]);

