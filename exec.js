var exec = require("child_process").exec;

exec("git verion", function(err, stdout){

    if (err) {
        throw err;
    }
    console.log("Git Version Executed");

    console.log(stdout);
})
