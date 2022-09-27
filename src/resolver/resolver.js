
import db from '../models/index'
const resolvers = {
    Query:{
        Authors: async (parent,args,context) =>
        {
        const a = await context.Author.findAll();
        return a
        
        },

        Books: async (parent,args,context) =>
        {
        const a = await context.Book.findAll();
        return a
        },
        Users: async (parent,args,context) =>
        {
           const a = await context.User.findAll();
           return a
        
        },
        Userm: async (parent,args,context) => 
        {
            const a =await context.User.findByPk(args.id)
            return a
        },

        Authorm: async (parent,args,context) => 
        {
            const a =await context.Author.findByPk(args.id)
            return a
        },

        Bookm: async (parent,args,context) => 
        {
            const a =await context.Book.findByPk(args.id)
            return a
        },
    },
    Mutation:
    {
        //User
        createUser: async (parent,{input},context) => {
            var newUser = context.User.create(input)
            var a = await newUser
            input.id = a.id
            return newUser
        },

        updateUser: async (parent,{id,input},context) => {


             await context.User.update(
                 {
                    firstName: input.firstName,
                    lastName: input.lastName,
                    email: input.email,
                    address: input.address,
                    roleid: input.roleid
                },
                {
                 where: { id: id },
                }
              );

        } ,


        deleteUser: async (parent,{id},context) =>  {
            context.User.destroy({where:{ id: id }})
            return context.User.findByPk(id)
        },

        //Book
        createBook: async (parent,{input},context) => {
            var newBook = context.Book.create(input)
            var a = await newBook
            input.id = a.id
            return newBook
        },

        updateBook: async (parent,{id,input},context) => {
             await context.Book.update(
                 {
                    nameBook:  input.nameBook,
                    namSX: input.namSX,
                    nhaXuatBan:  input.nhaXuatBan,
                    tacGia: input.tacGia,
                },
                {
                 where: { id: id },
                }
              );
        } ,


        deleteBook: async (parent,{id},context) =>  {
            context.Book.destroy({where:{ id: id }})
            return context.Book.findByPk(id)
        },

        //Author

        createAuthor: async (parent,{input},context) => {
            var newAuthor = context.Author.create(input)
            var a = await newAuthor
            input.id = a.id
            return newAuthor
        },

        updateAuthor: async (parent,{id,input},context) => {

             await context.Author.update(
                 {
                    nameAuthor: input.nameAuthor,
                    namSinh: input.namSinh,
                    queQuan: input.queQuan,
                },
                {
                 where: { id: id },
                }
              );

        } ,


        deleteAuthor: async (parent,{id},context) =>  
        {
            context.Author.destroy({where:{ id: id }})
            return context.Author.findByPk(id)
        }
    },

    Book:{
        ats: async (parent,args,context) =>{
            const a = await context.Author.findByPk(parent.tacGia)
            return a
        }
    },

    Author:{
        book: async (parent,args,context) =>
		(parent.id ? await context.Book.findAll({
            where: {
                tacGia:parent.id  
            }
         }) : null)
            
    },
        

    
}



module.exports = resolvers;