import { Router } from "express";
import {
    getCharlas,
    getCharlaID,
    deleteCharla,
    createCharla,
    updateCharla,

} from "../controllers/charlas.controller.js";
const router = Router();
// GET todas las instituciones
router.get("/charlasAll", getCharlas);

// GET una charla por ID
router.get("/charlas/:id", getCharlaID);

// DELETE una charla con ID
router.delete("/charlas/:id", deleteCharla);

// INSERTAR una charla 
router.post("/charlas", createCharla);

//actualizar una charla
router.patch("/charlas/:id", updateCharla);
export default router;
