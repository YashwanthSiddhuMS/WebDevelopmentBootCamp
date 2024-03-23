//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var password = "I Love Programming";
var userInput="";

app.use(bodyParser.urlencoded({extended:true}));

function passwordInput(req,res,next){
  userInput=req.body["password"];
  console.log(userInput);
  next();
}

app.use(passwordInput);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  app.get("/", (req,res)=>{
  
    res.sendFile(__dirname + "/public/index.html");
  });
  app.post("/check",(req,res)=>{
    if(userInput==password){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }

  
  });