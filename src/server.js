//Import các thư viện cần dùng
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
 const resolvers= require( './resolver/resolver');
 import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import db from './models'
const sequelizeMethods = require('./controllers/sequelizeMethods');


require('dotenv').config();
//Tạo server với express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
//connect Database
connectDB();
viewEngine(app);
//initWebRoutes(app);

//Khai báo API graphql
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  context:123,
  graphiql: true, //sử dụng công cụ GraphiQL để đưa ra các query GraphQL theo cách thủ công
}));

// Khởi tạo server tại port 4000
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})