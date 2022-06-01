var fs = require("fs");
var path = require("path")

fs.readdir("./lib", function(err, files){
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib", fileName);
    })
})


var contents = fs.readFileSync("./lib/saying.md","utf-8",function(err, contents) {

    if (err) {
        console.log(err);
        
    }
    console.log(contents);
})
 