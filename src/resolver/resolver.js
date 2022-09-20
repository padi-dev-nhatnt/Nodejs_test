import db from '../models/index'
const resolvers = {
    
        Users: async (args,context) =>
        {
           const a = await db.User.findAll();
           return a
        
        },
    
        Userm: async (args,context) => 
        {
            const a =await context.User.findByPk(args.id)
            return a
        },
   
        createUser: async ({input},context) => {
            var newUser = context.User.create(input)
            var a = await newUser
            input.id = a.id
            return newUser
        },

        updateUser: async ({id,input},context) => {

            console.log(id)
            console.log(input)

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


        deleteUser: async ({id},context) =>  context.User.destroy({where:{ id: id }})
        
        
}

module.exports = resolvers;