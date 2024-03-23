const fs=require("fs");
fs.writeFile("my.text","hi yash", (err)=>{
    if (err) throw err;
    console.log("File saved successfully");
})
fs.readFile("message.txt","utf8",(err, data)=>{
    if (err) throw err;
    console.log(data[1]);
})