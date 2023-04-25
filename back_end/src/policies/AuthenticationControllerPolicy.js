const Joi = require('joi')
module.exports = {
    login(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{3,30}$')
            ),
        });

        const {error, value} = schema.validate(req.body);
        if (error){
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'Correo electrónico no válido'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'La contraseña debe ser de al menos 8 caracteres'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Registro de información inválido'
                    })
            }
        } else {
            next()
        }
    }
}