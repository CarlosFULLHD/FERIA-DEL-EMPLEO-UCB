import Api from './Api'

export default {
    // OBTENER TODAS LAS CHARLAS POR ID DE INSTITUCIÓN
    getAllCharlasById : (id) => {
        return Api().get(`api/charlasins/${id}`)
    },

    // INSCRIBIR CHARLA A CUENTA 
    postCharlaCuenta:(params) => {
        return Api().post(`api/addcharlacuenta`,params)
    },

    // GET CHARLAS POR ID DE CUENTA
    getCharlaByIdCuenta: (id) => {
        return Api().get(`api/getcharlacuenta/${id}`)
    },
    // DELETE CHARLA TIENE ESTUDIANTES POR ID DE CHARLA ESTUDIANTES
    deleteCharlaCuentaById:(id)=>{
        return Api().delete(`api/deletecharlacuenta/${id}`)
    },
    // GET CHARLAS ADMINISTRADOR POR ID DE INSTITUCIÓN
    getCharlaAdmiByIdInstitucion:(id) => {
        return Api().get(`api/getcharlasadmi/${id}`)
    }
}
