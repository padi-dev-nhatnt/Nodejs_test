var { buildSchema } = require('graphql');

var schema = buildSchema (`
  type User {
    id: ID!
    firstName: String
    lastName:String
    email:String
    address:String
    roleid: String
  }
  type Query {
    Users: [User]
    Userm(id: ID!) : User
  }  
`);

module.exports = schema;