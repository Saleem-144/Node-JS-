const http = require("http");
const fs = require ("fs")

const server = http.createServer( ( req, res ) => {
    
    res.writeHead(200,{"Content-type" : "application/json"});
    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
    // const objData = JSON.parse(data);
    
    
    if (req.url=="/" || req.url=="/home"){
        res.end(" <h1> This is Home Page </h1> ")
    }
    else if (req.url=="/contact"){
        res.end(" <h1> This is Contact Page </h1>");
    }
    else if (req.url=="/article"){
        res.end(" <h1> This is Article Page </h1> ");
    }
    else if (req.url=="/about"){
        res.end(" <h1> This is About Page </h1>");
    }
    else if (req.url == "/userapi"){
        // res.end(objData[0].name);
        res.end(data);
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 Page Not Found </h1> ")
    }
})

server.listen(8000, "127.0.0.1" , () => {
    console.log("listening to the port number 8000");
});
