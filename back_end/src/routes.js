const AuthenticationController = require('./controllers/AuthenticationController')
const ChatboxController = require('./controllers/ChatboxController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/login', 
        AuthenticationControllerPolicy.login,
        AuthenticationController.login)
    app.get('/chats_empresas',
        ChatboxController.chatbot
    )

}

