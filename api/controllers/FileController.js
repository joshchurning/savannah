// api/controllers/FileController.js

module.exports = {

  index: function (req,res){

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="avatar" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    )
  },
  upload: function  (req, res) {
    req.file('avatar').upload({
    	dirname: '../../assets/uploads'}, 
    	function (err, files) {
      if (err)
        return res.serverError(err);

      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });
  },

  download: function (req, res) {
  	var path = '/Users/joshchurning/Desktop/savannah/.tmp/uploads/' + req.param('filename');

	var fs = require('fs');

	res.setHeader('Content-disposition', 'attachment; filename=' + req.param('filename'));
res.status(200);
res.setHeader('Content-type', 'binary');
	var filestream = fs.createReadStream(path);
  filestream.pipe(res);

  	// res.download(path);

  }

};