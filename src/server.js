import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/conectDB';
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Xây dựng một Schema, sử dụng ngôn ngữ Schema GraphQL
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
    hello: () => {
      return 'Hello world!';
    },
  };
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

viewEngine(app);
initWebRoutes(app);

//connect Database

connectDB();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, //sử dụng công cụ GraphiQL để đưa ra các query GraphQL theo cách thủ công
}));
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})
