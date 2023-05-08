import Api from './Api'

export default {
    crearTarjeta: () => {
        return Api().get('api/institucionesjoin')
    }
}