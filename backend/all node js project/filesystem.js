const fs = require("fs");
fs.writeFile("test.txt","hello node.js",(err)=>{
    if (err) {
        console.log("Error ayaa");
    } else {
        console.log("file ban gya");
    }
});


fs.appendFile("text.txt" , "\nhellokrishnam" , (err)=>{
    if (err) throw err;
    console.log("krishnam varshney");

});
