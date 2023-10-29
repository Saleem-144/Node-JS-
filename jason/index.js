const fs = require ("fs"); 

const bio = {
    f_name : "sohaib",   // object
    l_name : "saleem",
    age : 20 ,
};

// const jasonData = JSON.stringify(bio); // conversion of object in to jason format 
// console.log(jasonData);

// const objData = JSON.parse(jasonData); // conversion of jason to object format 
// console.log(objData);


const jasonData = JSON.stringify(bio);
fs.writeFile("N_jason.jason", jasonData , ( err ) => {
    console.log("Object to Jason Has Been Converted");
});

fs.readFile("N_jason.jason","utf-8",(err,data) => {
    const objData = JSON.parse(data);
    console.log("This is a jason foramat data :",data);
    console.log("Jason to Object Has Been Converted")
    console.log("This is a object format data :",objData);
   
});