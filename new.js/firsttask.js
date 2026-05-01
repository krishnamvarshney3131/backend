const fs=require("fs");
//const fd=fs.openSync("secfc.txt","w+");
//fs.writeSync(fd,"hellooooo\n hiiii");


//FileSystem.writeFileSync("secfc.txt","hello Dummy\n",{flag:"w"});
//console.log(FileSystem.readFileSync("secfc.txt","utf8"));
//const fa =FileSystem.appendfileSync("secfc.txt","hello");
//FileSystem.renameSync()
//FileSystem.unlinkSync()




// differences between write function and writesync function very important



// code with async function 




// tp print data 

//fs.readFile("secfc.txt","utf8",(err,data)=>{
    //if (err){
      //  console.log(err);
    //}
    //else{
      //  console.log("data");
    //}
//});

// file fs content character by character print karna hai
const fs = require("fs");

fs.readFile("secfc.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // read character by character
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
});

// using chunk
const fs = require("fs");

const stream = fs.createReadStream("secfc.txt", { encoding: "utf8" });

stream.on("data", (chunk) => {
    for (let char of chunk) {
        console.log(char);
    }
});



// read line function use karke karna hai isme data terminal pr likhna hota hai or jo terminal pr likhte hai no sidhe file me save ho jata hai 


// listen to be used in server has different port no
// two types of request cpu scheduling request 
// I/o intensive request in I/O yeh third party se data lata hai 

// two types of header jab ham request karte hai toh header bhi jata hai sath me
//requested header isme hum request karte hai 
// response headrer isme response ata hai 

// node js me server banane ki jarurat nahi hai 
// server banane ke liye HTTP hota hai 
// port no : 80  3000   8080   5173    5000    8000

// root path .. nested path 

//one url have protocol,, domain name(host name),,, and root path,, nested path  // and also have query path ,  query string me data bhejte hai
// url uniform resouse locator
// url pe bahut sara data hota hai 



// path module-: two types of path absolute and relative path 
// in absolute path give the all information 

// path.parse => return the object 
// kya kya kara diya sir ne fs,path,http,url,module,scope