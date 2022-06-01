var fs = require("fs");

fs.readdirSync('./lib', function(err, files){

    if(err){
        throw err;
    }
    console.log(files);
});

console.log("Reading files...")
