import { Router } from "express";
import {
  //getInstlinks,
  createVideos
} from "../controllers/inst_videos.controller.js";

const router = Router();
// // GET todas las instituciones
// router.get("/institucioneslinks", getInstlinks);
// // GET una institucion por ID
// router.get("/instituciones/:id", getInstitucion);
// // DELETE una institucion con ID
// router.delete("/instituciones/:id", deleteInstitucion);

// INSERTAR una institucion 
router.post("/institucionesvideos", createVideos);
// //actualizar una institucion
// router.patch("/instituciones/:id", updateInstitucion);

export default router;