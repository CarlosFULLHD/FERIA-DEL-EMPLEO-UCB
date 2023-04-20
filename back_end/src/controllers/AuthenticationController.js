
const {User} = require('../models')


// RUTA PARA IDENTIFICAR USUARIO
module.exports = {
    async login (req,res ) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err){
            res.status(400).send({
                error: 'Cuenta ya existe'
            })
        }
        
        //res.send({
        //    message: `El usuario ${req.body.email} esta logeado`
        //})
    }
}