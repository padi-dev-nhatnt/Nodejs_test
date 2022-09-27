var { buildSchema } = require('graphql');

var typeDefs = `
  type Author{
    id:ID!
    nameAuthor: String,
    namSinh: String,
    queQuan: String,
    book:[Book] 
  }
  type Book {
    id:ID!
    nameBook: String,
    namSX:String,
    nhaXuatBan: String,
    tacGia: Int,
    ats: Author,
  }
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

  input cb{
    nameBook: String,
    namSX:String,
    nhaXuatBan: String,
    tacGia: Int,
  }

  input ca{
    nameAuthor: String,
    namSinh: String,
    queQuan: String,
  }

  type Query {
    getAuthor:Book
    Authors:[Author]
    Books:[Book]
    Userc:Int!
    Authorm(id: ID!):Author
    Bookm(id: ID!):Book
    Users: [User]
    Userm(id: ID!) : User
    getAuthorBook:Author
  }  
  type Mutation {
    createUser(input: cu ): User
    updateUser(id: ID!,input: cu): User
    deleteUser(id: ID!) : User
    createBook(input: cb ): Book
    updateBook(id: ID!,input: cb): Book
    deleteBook(id: ID!) : Book
    createAuthor(input: ca ): Author
    updateAuthor(id: ID!,input: ca): Author
    deleteAuthor(id: ID!) : Author

  }
`;

module.exports = typeDefs;