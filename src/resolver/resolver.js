//import db from '../models/index'
const resolvers = {
    //Query:{
        Users: async (parent,args, context,info) =>
        {
            console.log(context)
           const a = await context.User.findAll();

           return a
        
        },
    
        Userm: async (parent,args,context) => 
        {
            console.log("abc")
            const a =await context.User.findByPk(parent.id)
            return a
        },
   //},
}
// var resolver = {
//     hello: () => {
//       return 'Hello world!';
//     },
//   };
module.exports = resolvers;