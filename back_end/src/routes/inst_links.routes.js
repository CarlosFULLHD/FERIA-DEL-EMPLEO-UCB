import { Router } from "express";
import {
  //getInstlinks,
  createInstlinks
} from "../controllers/inst_links.cotroller.js";

const router = Router();
// // GET todas las instituciones
// router.get("/institucioneslinks", getInstlinks);
// // GET una institucion por ID
// router.get("/instituciones/:id", getInstitucion);
// // DELETE una institucion con ID
// router.delete("/instituciones/:id", deleteInstitucion);

// INSERTAR una institucion 
router.post("/institucioneslinks", createInstlinks);
// //actualizar una institucion
// router.patch("/instituciones/:id", updateInstitucion);

export default router;