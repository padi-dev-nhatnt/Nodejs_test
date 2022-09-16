const resolvers = {
    Query: {
        user: async (parent,args, {sequelizeMethods}) =>
        await sequelizeMethods.getAllUsers()
    }
}

module.exports = resolvers