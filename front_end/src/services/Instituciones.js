import Api from './Api'

// SERVICIO PARA LISTAR TODAS LAS INSTITUCIONES
export default {
    listarIns : (parameters) => {
        return Api().get('api/instituciones',parameters)
    },

    borrarIns: (id) => {
        return Api().delete(`api/instituciones/${id}`)
    },

    updateIns: (id, data) => {
        return Api().patch(`api/instituciones/${id}`,data)
    },

    crearIns: (data) => {
        return Api().post('api/instituciones',data)
    },
}

