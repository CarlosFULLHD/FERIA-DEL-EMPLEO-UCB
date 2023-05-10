import Api from './Api'

export default {
    // GET INSTITUCIONES COMBOBOX
    getInstituciones: () => {
        return Api().get('api/calendario')
    },
    // AÑADIR CHARLA
    addCharla: (data) => {
        return Api().post('api/charlas', data)
    },
    // GET ALL CHARLAS
    getAllCharlas: () => {
        return Api().get('api/charlasAll')
    }

}