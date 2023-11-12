
import express, { Application, Request, Response, } from "express";
import "dotenv/config"
import dbInit from "./db/init"
import routes from "./routes"
import path from "path"

const cors: any = require("cors"); 
const http = require('http');

dbInit();

const app: Application = express(); 
const port = process.env.PORT || 3000; 
app.use(cors()); // enable cors
// Body parsing Middleware
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