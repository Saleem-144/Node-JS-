// This is not a streaming method 

// const fs = require("fs");
// const http = require ("http");
// const server = http.createServer();

// server.on("request",(req,res)=>{
//     fs.readFile("input.txt",(err,data)=>{
//         if (err) return console.log(err);
//         res.end(data.toString())
//     });
// });


// server.listen(8000,"127.0.0.1")

// This is a streaming method means jitna data aap read ker rhay utna hi data aap real time per show kerwa rhay 
// const fs = require("fs");
// const http = require ("http");
// const server = http.createServer();

// server.on("request",(req,res)=>{
//    const rstream = fs.createReadStream("inpust.txt");
//     rstream.on("data",(chunkdata)=>{
//         res.end(chunkdata);
//     });
//     rstream.on("end",()=>{
//         res.end ();
//     })
//     rstream.on("error",(err)=>{
//         res.writeHead("404")
//         res.end("file not found")
//     })
    
// });

// server.listen(8000,"127.0.0.1")


// 3rd way 

const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request",(req,res)=>{
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
})
server.listen(8000,"127.0.0.1")