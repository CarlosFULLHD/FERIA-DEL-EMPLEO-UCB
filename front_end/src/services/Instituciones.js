import Api from './Api'


export default {
    // SERVICIO PARA LISTAR TODAS LAS INSTITUCIONES
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
    // SERVICIOS PARA MANEJO DE IMAGENES INSTITUCIONES
    crearImg: (data) => {
        return Api().post('api/institucionesimages',data)
    }
}





