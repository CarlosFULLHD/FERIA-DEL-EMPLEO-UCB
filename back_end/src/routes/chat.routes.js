import { Router } from "express";
import { 
    getCupos,
    getDatosCompletos,
    getNombreEmpresa,
    getInstituciones
 } from "../controllers/chat.controller.js";
const router = Router();

// GET todas las instituciones
router.get("/chats_empresas", getInstituciones);
// GET nombre de empresa
router.get("/chats_empresas/:id", getNombreEmpresa);
// GET datos reunion
router.get("/chats_empresas/:id/datos", getDatosCompletos);
// GET cantidad de cupos disponibles
router.get("/chats_empresas/:id/cupos", getCupos);

export default router;