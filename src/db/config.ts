const mongoose = require("mongoose");
let mongoDbUrl = process.env.uri

// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = mongoDbUrl;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("mongodb").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// // const sequelizeConnection:any = run().catch(console.dir);

// export default run;

function MongoDbConnection ()  {
  try {

mongoose.connect(mongoDbUrl).then((db:any) =>{

  console.log('MONGO connected');

})
  }
catch(error:any) {
  console.log(error)
}
mongoose.set('strictQuery', false);

}

export default MongoDbConnection