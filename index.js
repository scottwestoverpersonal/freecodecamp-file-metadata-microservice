var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/test');
});

app.post("/fileInfo", upload.any(), function (req, res) {
  res.json(req.files[0]);
  // removes the file from the server
  var filePath = req.files[0].path; 
  fs.unlinkSync(filePath);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});