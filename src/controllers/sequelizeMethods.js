import db from '../models/index'


const  sequelizeMethods= {
    getAllUsers: async ()=> await  db.User.find()
}

module.exports = sequelizeMethods;