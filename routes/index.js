var testdata = require('../model/index');

exports.index = function (req, res) {    

	 // console.log("index.js - routes");

	 testdata.getVideos(function(err,theData){

	 	if (err){
			console.log("ERROR : " + err);
			// TODO: handle Error
		} else {
	 		// console.log("THEDATA", theData);
	 		res.render('index',theData);
	 	}

	 });
};

exports.video = function (req, res) {

    console.log( "req.params.id : " + req.params.id );

	testdata.getVideo( req.params.id, function (err, theVideo) {
        
        if(err){
        	console.log("ERROR : " + err);
			// TODO: handle Error
            res.render('404');
        } else {
            res.render('video', theVideo );
        }

	});
};
exports.test = function (req, res) {   
	res.render("test",{title:"test"});
};

exports.dirtypost = function (req, res) {


	console.log("this is dirty");

	
    /*

     Title: The Do-Gooder
     Client: Scan									-	www.scan.se
     Agency: Saatchi								-	www.saatchi
     Production Company: Film de Liberté					-	www.filmdeliberte.com
     Director of Photography: Christian Haag				-	www.christianhaag.se

    */
    /*
		var dirty = require('dirty');
		
		var videosDb = dirty('videos.db');

        videosDb.on('load', function() {

			var pos = 6;
            var vimeoId = 11387791;

			videosDb.set(vimeoId, {

				vimeoID: vimeoId,
                sortorder: pos,
                title: 'The Do-Gooder',
				client: 'Scan',
				creditlist: 'Client: <a href="http://www.scan.se">Scan</a><br>' +
                    'Agency: <a href="http://www.saatchi.se/">Saatchi</a><br>' +
                    'Production Company: <a href="http://www.filmdeliberte.com">Film de Liberté</a><br>' +
                    'Director of Photography: <a href="http://www.christianhaag.se">Christian Haag</a><br>',

				img: 'scan_thedogooder.jpg'

			});


    		console.log('Added ' + vimeoId + ', img is %s filename.', videosDb.get(vimeoId).img);
			
			res.send("HELLO DIRTY : " + videosDb.get(vimeoId).img);

		});

    */
	res.send("Nothing to see here");

};