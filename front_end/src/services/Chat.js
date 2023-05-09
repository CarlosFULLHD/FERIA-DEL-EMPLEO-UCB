import Api from './Api'


export default {
    // SERVICIO PARA LISTAR TODAS LAS INSTITUCIONES
    listarIns : (parameters) => {
        return Api().get('api/chats_empresas',parameters)
    },
    chatIns: (id) => {
        return Api().get(`api/chats_empresas/${id}`)
    },
    chatDatos: (id) => {
        return Api().get(`api/chats_empresas/${id}/datos`)
    },
    chatCupos: (id) => {
        return Api().get(`api/chats_empresas/${id}/cupos`)
    },
}