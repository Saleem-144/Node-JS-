// console.log("hello")
                        //FS MODULE
// fs.writeFileSync("nw.txt", "This is my first file ");
// console.log("file has been created ")
// fs.appendFileSync("read.txt","This is the appended data ")
// const a = fs.readFileSync("read.txt");
// b=a.toString() /* if we not write this it will give the buffer value like <Buffer 54 68 69 73 20 69 73 20 6d 79 20 66 69 72 73 74 20
// 66 69 6c 65 20 54 68 69 73 20 69 73 20 74 68 65 20 61 70 70 65 6e 64 65 64 20 64 61 74 61 20>*/
// console.log(b)
// fs.renameSync("read.txt","readwrite.txt")
// console.log("file has been renamed");


                                /*SYNC CRUD OPERATION USING FS MODULE */

// // fs.mkdirSync("HEYYA");
// const fs = require("fs"); // use to call file system module 
// fs.writeFileSync("HEYYA/nw.txt", "hello guyz whats up !"); // file has been created with the given data
// fs.appendFileSync("HEYYA/nw.txt", " ok bro "); // data has been appended
// // const read = fs.readFileSync("HEYYA/nw.txt", "utf8"); // encoding
// // console.log(read);// print the encoded buffer
// fs.renameSync("HEYYA/nw.txt", "HEYYA/up.txt"); // file has been renamed
// fs.rmdirSync("HEYYA"); // remove the directory or delete the folder 


                             /* ASYNC CRUD OPERATION USING FS MODULE */
// const fs = require("fs"); // use to call file system module 
// fs.mkdir("thappa",(err)=>{
//     console.log(err);    
//     console.log("folder has been created")
// });

// fs.writeFile("./thappa/read.txt","created file using sync method",(err)=>{
//     console.log("error is", err);
//     console.log("file has been created sucessfully")

// });

// fs.appendFile("./thappa/read.txt"," appended data is also done",(err)=>{
//     console.log("error is", err);
//     console.log("data has been appended")
// });

// fs.readFile("./thappa/read.txt","utf-8",(err,data)=>{
//     console.log(data)
//     console.log("error is", err);

// });
// fs.rename("./thappa/read.txt","./thappa/renam.txt",(err)=>{
//     console.log("rename is done")
// })

// fs.unlink("./thappa/renam.txt",(err)=>{
//     console.log("err is",err)
// })

// fs.rmdir("./thappa",()=>{
//     console.log("deleted the folder ")    
// })

                     // OS MODULE
// const os = require("os");
// const system = ()=>{
//     console.log(os.arch())
//     console.log(`Free memory remaining is ${os.freemem()/1024/1024/1024} GB`) /* the default value is in bytes so to 
//     convert in into GB do /1024 byte->KB,again/1024 KB->MB , again to MB->GB*/
//     console.log(`Total memory is ${os.totalmem()/1024/1024/1024} GB`)
//     console.log(os.hostname());
//     console.log(os.platform());
//     console.log(os.tmpdir());
//     console.log(os.type());
// // }
// system();

                  // path module
// const pt = require("path");
// const bt = pt.parse("C:\Users\Sohaib\Desktop\Node js\index.js");
// console.log("1",bt.root);
// console.log("2",bt.name);
// console.log("3",bt.dir);
// console.log("4",bt.ext);
// console.log("5",bt.base)

            // Creating And Exporting My own Module 
// 1st WAY
// const add = (a,b) => {
//      return a+b;
// };
// const sub = (a,b) => {
//      return a-b;
// };
// const mul = (a,b) => {
//     return a*b;
// };
// const div = (a,b) => {
//     return a/b;
// };
// module.exports = {add,sub,mul,div};

// 2nd WAY
// exports.add = (a,b) => {
//     return a+b;
// };
// exports.sub = (a,b) => {
//     return a-b;
// };
// exports.mul = (a,b) => {
//    return a*b;
// };
// exports.div = (a,b) => {
//    return a/b;
// }

// console.log("Brother pls study my work is pending ") 