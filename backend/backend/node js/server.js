const fs = require("fs");
const http = require("http");
http.createServer((req, res) => {
    fs.appendFile("log.txt", `${Date.now()}: New Request Recorded\n`,(err) => {
        if (err) console.log(err);
    });
    res.setHeader("Access-Control-Allow-Origin", "krishnam varshney");
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Server Started");
    res.end();
}).listen(8000, "localhost", () => {
    console.log("Server is listening on http://localhost:8000");
});