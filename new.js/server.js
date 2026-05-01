const http = require("http");
const serv = http.createServer((req , res)=>{
    res.end("Welcome To Server node js");
});
serv.listen(8000 , 'localhost' , ()=>{
    console.log("Server Is Listening On http://localhost:8000");
});