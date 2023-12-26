
import express, { Application, Request, Response, } from "express";
import "dotenv/config"
import dbInit from "./db/init"
import routes from "./routes"
import path from "path"
const mongoose = require("mongoose");
import config from "../src/db/config"

const cors: any = require("cors"); 
const http = require('http');


config()
dbInit()


const app: Application = express(); 
const port = process.env.PORT || 3000; 
app.use(cors()); // enable cors

//above config not found below function work
// Body parsing Middleware
// const mongoDbUrl = "mongodb+srv://rambabucjit06:8ETjsTnV7SlHvKFn@cluster0.stpgtlo.mongodb.net/"

// mongoose.connect(mongoDbUrl).then((db:any) =>{

//     console.log('MONGO connected');

// }).catch((error:any)=> console.log(error));
// mongoose.set('strictQuery', false);

app.use(express.json()); // josn middle ware


// 
let uiCodePath =  "client/dist"
console.log('environment : ',process.env.NODE_ENV)
app.use(express.static(path.join(__dirname, '..', uiCodePath)));

app.get("/", async (req: Request, res: Response) => {
	
//console.log(uiCodePath,'siris',process.env.NODE_ENV)
	return res.sendFile(
		path.join(__dirname, "..", uiCodePath, "index.html")
	);
});

//Intialising routes 
app.use('/api/v1', routes)


app.get("*", async (req: Request, res: Response) => {
	//console.log(uiCodePath)
	return res.sendFile(
		path.join(__dirname, "..", uiCodePath, "index.html")
	);
});

// app.listen(port, () => {
// 	console.log('connection established and server started....')
// 	return console.log(`Express is listening at http://localhost:${port}/login`)
// })

const server = http.createServer(app);
server.listen(process.env.port || 3000)