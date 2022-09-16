import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
// const typeDefs = require('./schema/schema');
// const resolvers = require('./resolver/resolver');

//Load method

// const sequelizeMethods = require('./controllers/sequelizeMethods');

// Xây dựng một Schema, sử dụng ngôn ngữ Schema GraphQL



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

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// 	context: () => ({ sequelizeMethods })
// })
app.use(cors())

// server.applyMiddleware({app})
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})
