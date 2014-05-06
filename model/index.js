var dirty = require('dirty');
var headTitleEnd = "DIRECTOR FREDRIK DAVIDSSON";

var getYear = function (){
	// TODO: set with date
	return "2013";
};


// Helper
function sortJSON(data, key, way) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}

// Testdata
exports.getTestData = function theData(callback) {
    
    callback("",{
			    	title: "Model test title",
			    	pagetitle: "Model test pagetitle",
			    	year: getYear(),

	});
    /*
    videosDb = dirty('videos.db');
	videosDb.on('load', function() {
		res.render('index.ejs', {locals:locals,sections:sectionsDb,app:appDb.get('app'),page:appDb.get('page'),msg:req.query.msg,err:req.query.err});
	});
	*/
};

exports.getVideos = function theData(callback) {

    // var videosDb = dirty('videoOrder.db');
    var videosDb = dirty('videos.db');

    console.log("getVideos() : ");

    var theVideos = [];

    videosDb.on('load', function() {

        videosDb.forEach(function(key, val) {
            // console.log('Found key: %s, val: %j', key, val);
            theVideos.push( val );
        });

        var theVideos2 = sortJSON(theVideos,"sortorder",'123');
        console.log( "/////////S////////" );
        console.log( theVideos2 );
        console.log( "/////////E////////" );
        // theVideos.sort(function(a,b){return a - b});

        callback("",{
            headtitle: headTitleEnd,
            videos: theVideos
            // aDb: videosDb
        });
    });



};


exports.getVideo = function theData(theid,callback) {

	// var videosDb = dirty('videoOrder.db');
    var videosDb = dirty('videos.db');

    // console.log("getVideos() : ");

    var theVideos = [];

    videosDb.on('load', function() {

        if(videosDb.get(theid).title){
            callback("",{
                // foo: "bar",
                // video: theVideo
                // aDb: videosDb
                title: videosDb.get(theid).title,
                headtitle: videosDb.get(theid).client + " " + videosDb.get(theid).title + " - " + headTitleEnd,
                creditlist: videosDb.get(theid).creditlist,
                vimeoid: theid
            });
        } else {
            callback("Nothing found with that id.",null);
        }


    });


	/*


    callback("",{
			    	title: "Videosida",
			    	pagetitle: "Video test pagetitle",
			    	vimeoid: theid

	});

	*/
	
};
