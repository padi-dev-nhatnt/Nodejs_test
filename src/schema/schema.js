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

  input cu{
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
  type Mutation {
    createUser(input: cu ): User
    updateUser(id: ID!,input: cu): User
    deleteUser(id: ID!) : User
  }
`);

module.exports = schema;