import Api from './Api'

export default {

    crearCuenta: (data) => {
        return Api().post('api/cuenta',data)
    },
}
