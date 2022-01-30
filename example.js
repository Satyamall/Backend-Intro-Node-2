
// path module
const path=require('path');

// //global level
// console.log(__filename);

// // path
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// // object
// console.log(path.parse(__filename));

// console.log(__dirname);

// //join
// console.log(path.join(__dirname,"test","hello.html"))


// *File systems 
const fs=require('fs');

// console.log("One");

// * async in nature 
// * callback

// * 1- Blocking code
// const data=fs.readFileSync(path.join(__dirname,"hello.txt"),"utf8")
// console.log(data);

// console.log("Two");

// * 2- Non Blocking code
// fs.readFile(path.join(__dirname,'hello.txt'), (err, data) => {
//     if (err) 
//     {
//         console.log("Error",err);
//         return;
//     }
//     console.log(data.toString());
// });

// * or
// fs.readFile(path.join(__dirname,'hello.txt'), "utf8" (err, data) => {
//     if (err) 
//     {
//         console.log("Error",err);
//         return;
//     }
//     console.log(data);
// });

// *Output: 1-
// -One Data Two

// *Output: 2-
// -One Two Data

// * Write a file 
// fs.writeFile(path.join(__dirname,'hello.txt'),"Hello World!!!!!",err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Created")
// })

// *Rename a file
// fs.mkdir(path.join(__dirname,'test'),err=>{
//     if(err){
//         console.log("Error",err)
//         return 
//     }
//     fs.rename(path.join(__dirname,'hello.txt'), path.join(__dirname, 'test','hello.txt'),(err)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         else
//         {
//             console.log("File renamed")
//         }
//     })
// })

// * Urls

// const URL =require('url');

const u= new URL('https://masaischool.com?q=1&q=2&q=3')

console.log(u.toString())
console.log(u.searchParams)

for([key,value] of u.searchParams){
    console.log(key,value)
}

u.searchParams.append("page","3")

console.log(u.searchParams)
console.log(u.toString());
