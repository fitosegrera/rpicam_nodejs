var connect = require('connect')
var serveStatic = require('serve-static')
var exec = require('child_process').exec
exec('raspistill -w 1280 -h 720 -o public/image.jpg -t 20000 -tl 1000')
connect().use(serveStatic(__dirname + '/public')).listen(8080, function(){
	console.log("connected on port: 8080")
})
