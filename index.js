import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import mysql from 'mysql';

import cors from 'cors'
import AppRoute from './routes/appRoute.js'


const app = express();

// app.use('/', rootRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/', rootRoutes);
AppRoute(app);
// mongodb+srv://usergunesh:<password>@cluster0.znykm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb+srv://usergunesh:passwordgunesh@cluster0.znykm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// MongoDB Connection
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => {
//         console.log(`Server Running on port: ${PORT}`)
//     }))
//     .catch((error) => console.log(error.message));

// MySQL Connection
const ms = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nz'
});
try {
    ms.connect();
    app.listen(PORT, () => {
        console.log(`Server Running on port: ${PORT}`)
    })
} catch (error) {
    console.log(`Error: ${error.message}`)
}




// const express = require('express');
// const { resolve } = require('path');

// const app = express();
// const port = 3010;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri =
//   'mongodb+srv://dbuser1:dbuser1@cluster0.znykm.mongodb.net/?retryWrites=true&w=majority';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('zee5').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("zee5");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });



// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
