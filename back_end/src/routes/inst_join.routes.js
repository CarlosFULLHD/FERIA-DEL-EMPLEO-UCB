import { Router } from "express";
import {
    getInstJOIN,
    getImagenesInstv1,
    getImagenesInstv2
} from "../controllers/inst_join.controller.js";
//controlador de rutas para el manejo modularizado
//Digamos carpeta 2
//importamos funciones asincronas de la carpeta 3

const router = Router();

// GET JOIN MAESTRO DE TODAS LAS INSTITUCIONES 
router.get("/institucionesjoin", getInstJOIN);

//OJO PONGO DOS VERSIONES
// GET imagenes por id de institucion ordenados por id de imagen(en orden xd)
router.get("/institucionesimagesv1", getImagenesInstv1);

// GET imagenes por id de institucion ordenados por id de imagen(en orden xd)
router.get("/institucionesimagesv2", getImagenesInstv2);

// //obtener una institucion por nombre
// router.get("/instituciones/query/:word", getInstitucionbyword);

// // GET una institucion por ID
// router.get("/instituciones/:id", getInstitucion);

// // DELETE una institucion con ID
// router.delete("/instituciones/:id", deleteInstitucion);

// // INSERTAR una institucion 
// router.post("/instituciones", createInstituciones);

// //actualizar una institucion
// router.patch("/instituciones/:id", updateInstitucion);


export default router;
