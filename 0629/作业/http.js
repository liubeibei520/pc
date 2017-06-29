
var http=require("http")

var fs=require("fs");


http.createServer(function (req, res) {
    console.log(req.url);
    var url=req.url;//用url保存请求地址

    switch (url){
        case "/index.html": fs.readFile("index.html","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/html;charest=utf8"});
                res.end(data)
            }
        });
            break;
        case "index02.html":fs.readFile("index02.html","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/html;charest=utf8"});
                res.end(data)
            }
        });
            break;

        case "/index.css": fs.readFile("index.css","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/css;charest=utf8"});
                res.end(data)
            }
        });
            break;

        case "/index.js":fs.readFile("index.js","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/javascript;charest=utf8"});
                res.end(data)
            }
        });
            break;
        case "/demo.html":fs.readFile("demo.html","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/html;charest=utf8"});
                res.end(data)
            }
        });
            break;

        case"/333.jpg": fs.readFile("333.jpg", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/jpeg;charest=utf8"});
                res.end(data)
            }
        });
            break;
        default:
            res.end('404 not find');

    }

}).listen(3000)