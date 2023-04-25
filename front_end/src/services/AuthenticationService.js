import Api from './Api'

// WILL ALLOW US TO CALL THE REGISTER OBJECT

export default {
    login: (credentials) => {
        return Api().post('login',credentials)//WHERE DO THE SERVER WILL CONNECT
    }
}

//AuthenticationService.register({
//    email:'test@gmail.com',
//    password:'123456'
// })