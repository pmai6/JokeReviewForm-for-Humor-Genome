var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/assets';

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets/html'));

app.set('port', process.env.PORT || 3000);

router.use(function (req,res,next) {
  console.log("/" + req.method + " " + req.originalUrl);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/html/index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "/html/404.html");
});

app.listen(app.get('port'),function(){
  console.log('Listening on:' + app.get('port'));
});
