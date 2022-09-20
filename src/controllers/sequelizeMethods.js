import db from '../models/index'


const  sequelizeMethods= {
    getAllUsers: async ()=> {
        return await  db.User.findAll()
    }
}

module.exports = sequelizeMethods;