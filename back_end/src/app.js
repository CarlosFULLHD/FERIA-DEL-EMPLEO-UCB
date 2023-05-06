import express from "express";
import morgan from "morgan";
import bodyParser from 'body-parser'// PROCESS JSON DATA VERY EASLY
import cors from 'cors'

import institucionesRoutes from "./routes/instituciones.routes.js";
import cuentaRoutes from "./routes/cuenta.routes.js";
import indexRoutes from "./routes/index.routes.js";
import inst_linkRoutes from "./routes/inst_links.routes.js";
import inst_imagesRoutes from "./routes/inst_img.routes.js";
import inst_videosRoutes from "./routes/inst_videos.routes.js";
import institucionesJOINRoutes from "./routes/inst_join.routes.js";
import institucionescalendarioRoutes from "./routes/calendario.routes.js"
import charlasRoutes from "./routes/charlas.routes.js"
import charlaslinksRoutes from "./routes/char_links.routes.js"
//Aqui es donde corre todo el backend
//digamos carpeta 1

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())

// Routes+

//solo funcionara cuando usemos la ruta "localhost:3000/api/entidades"

app.use("/", indexRoutes);
//middleware para evitar que alguien no logueado no acceda,
//es decir el admin tendra /api

//Se llaman a todas las RUTAS
app.use("/api", institucionesRoutes);
app.use("/api", cuentaRoutes);

app.use("/api", inst_linkRoutes);
app.use("/api", inst_imagesRoutes);
app.use("/api", inst_videosRoutes);
app.use("/api", institucionesJOINRoutes);
app.use("/api", institucionescalendarioRoutes);
app.use("/api", charlasRoutes);
app.use("/api", charlaslinksRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
