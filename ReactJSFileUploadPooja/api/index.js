var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var port = 8090;
var host = "localhost";

http.createServer(function (req, res) {
    var path = url.parse(req.url, true);
    if (path.pathname.endsWith("uploadFile")) {
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {

            for (var file in files) {
                if (!files.hasOwnProperty(file)) continue;
                var oldpath = files[file].path;
                var newpath = `C:/data/${files[file].name}`;
                fs.renameSync(oldpath, newpath);
            }
            res.write('File uploaded and moved!');
            res.end();
        });

    }

}).listen(port, host);

