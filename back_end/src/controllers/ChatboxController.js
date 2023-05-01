
const {chatbox} = require('../models')


// RUTA PARA IDENTIFICAR USUARIO
module.exports = {
    async chatbot (req,res ) {
        connection.query('SELECT * FROM chatbots', (error, results, fields) => {
            if (error) throw error;
        
            res.json(results);
          });
    }
}