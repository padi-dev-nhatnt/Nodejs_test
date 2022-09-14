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
    // return res.status(200).json({
    //     message: req.body.id
    // })
}




// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    post:post,
    Delete:Delete
}
