import { Router } from "express";
import {
    addStudentToCharla
} from "../controllers/añadirest_charla.controller.js";
const router = Router();
// GET todas las instituciones
router.post("/inscribircharla", addStudentToCharla);


export default router;
