(function() {
    var port = 3711;

    var express = require("express");
    var app = express();
    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return next();
    });
    app.use(express.static(__dirname + '/'));
    app.listen(port);
    console.log("http://127.0.0.1:" + port + '/');
})(this);