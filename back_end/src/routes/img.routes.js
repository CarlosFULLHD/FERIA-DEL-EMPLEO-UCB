import { Router } from "express";
import {
    getImg,
    createImg,
    getImagenes,
    // deleteCuenta,
    // updateCuenta,
} from "../controllers/img.controller.js";
//carpeta 2

const router = Router();

// GET para que te de los datos de UNA SOLA imagen - se necesita ID
router.get("/imagen/:id", getImg);
// INSERTAR/Crear una imagen nueva 
router.post("/imagen", createImg);

// GET para ver todas las imagenes
router.get("/imagen", getImagenes);
// // DELETE una cuenta por ID
// router.delete("/instituciones/:id", deleteCuenta);
// //actualizar una cuenta
// router.patch("/instituciones/:id", updateCuenta);

export default router;
