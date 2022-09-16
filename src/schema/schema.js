const {gql} = require('apollo-server-express')

const typeDeft = gql`
  type User {
    firstName: String
    lastName:String
    email:String
  }
  #Root type
    type Query{
        Users:[User]
    }  
`

module.exports=typeDeft;