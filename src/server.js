//Import các thư viện cần dùng
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const typeDefs = require('./schema/schema');
const resolvers= require( './resolver/resolver');
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import db from './models/index'
const {makeExecutableSchema} = require ('@graphql-tools/schema')
import Promise from 'bluebird';

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
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
//Khai báo API graphql
app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  context:db,
  graphiql: true,
}
));

// Khởi tạo server tại port 4000
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})