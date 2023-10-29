const EventEmitter = require ("events") ; 

const event = new EventEmitter();

// event.on("SayMyName",()=>{
//     console.log("M.Sohaib Saleem");
// })
// event.on("SayMyName",()=>{
//     console.log("shehryar");
// })
// event.on("SayMyName",()=>{
//     console.log("soomro");
// })
// event.on("SayMyName",()=>{
//     console.log("subhan");
// })


// event.emit("SayMyName");

event.on("checksys",(sys,msg)=>{
    console.log(`the status code is ${sys} and the page is  ${msg}`)
})



event.emit("checksys",200,"ok");


