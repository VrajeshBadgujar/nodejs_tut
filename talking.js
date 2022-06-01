var saying = [
    "you mat delay but time will not.",
    "tell me & i will forgt",
    "it taes many good deeds to buid a reputation.",
    "an investment in knowledge pays best"
]

var interval = setInterval(function(){
    var i = Math.floor(Math.random() * saying.length);
    process.stdout.write(`${saying[i] }\n`);
},1000);

process.stdin.on('data', function(data){
    console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
    
    clearInterval(interval);
    process.exit();
})