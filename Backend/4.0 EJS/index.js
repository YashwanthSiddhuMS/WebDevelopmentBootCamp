import express from "express";
import ejs from "ejs";

import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('view engine','ejs');
const port = 3000;

const d = new Date();
const day=d.getDay();
var messsage;


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  app.get("/", (req,res)=>{
    if(day==6){
        res.render("index.ejs",
       {
        messsage:"Enjoy your weekend"
       } );
    }
    else{
        res.render("/views/index.ejs",
        {
         messsage:"Work harder "
        } );
    }

  });
