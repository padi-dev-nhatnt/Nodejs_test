import { render } from 'ejs';
import db from '../models/index'
let getHomePage = async (req, res) => {
    try {
        let data =await db.User.findAll();
        console.log('.......................')
        console.log(JSON.stringify(data))
        console.log('.......................')
        //return res.render('homepage.ejs');
        return res.status(200).json({

            data: JSON.stringify(data)
        }
         )
        
    } catch (e) {
        console.log(e)
    }

    
    let data =await db.sequelize.findAll();
    // return res.render('homepage.ejs',{
    //       data: JSON.stringify(data)
    // });
    return res.status(200).json({

        data: JSON.stringify(data)
    }
     )
    
}

let Delete = (req, res ,next) =>{
    db.User.destroy({where:{ id: req.params.id }})
   
}


let post = (req, res ,next) =>{
    db.User.create(req.body)
}

let getAboutPage = (req, res ,next) => {
    return res.render('test/about.ejs');
    
}

let sua = (req, res, next) => {
     db.User.update(
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        roleId: req.body.roleId
        },
        {
          where: { id: req.params.id },
        },
        {raw : true}
      );
    
}




// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    post:post,
    Delete:Delete,
    sua:sua
}
