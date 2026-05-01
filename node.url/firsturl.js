const fs = require("fs");
const url = require("url");
const http = require("http");
const aderss = 'http://localhost:4000/about?name=krishnamvarshney';
const myUrl = url.parse(aderss, true);
const myUrl2 = new URL(aderss);
console.log(myUrl);
console.log(myUrl2);