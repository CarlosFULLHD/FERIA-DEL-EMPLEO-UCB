import { pool } from "../db.js";
//Carpeta 3
//Aqui es donde se ejecuta la funcionalidad, querys y funciones
//con el export mandamos estas funciones asincronas a la carpeta 2

// export const getInstlinks = async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM instituciones");
//     res.json(rows);
//   } catch (error) {
//     return res.status(500).json({ message: "Algo fue mal" });
//   }
// };
// //obtener institucion por id
// export const getInstitucion = async (req, res) => {
//   try {
//     //creamos una const para guardar el parametro 
//     const { id } = req.params;
//     const [rows] = await pool.query(
//       "SELECT * FROM instituciones WHERE instituciones_id = ?",
//       [id]
//     );

//     if (rows.length <= 0) {
//       return res.status(404).json({ message: "No existe el registro" });
//     }

//     res.json(rows[0]);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({error, message: "Algo fue mal al obtener la institucion" });
//   }
// };
// //se necesita id para le delete
// export const deleteInstitucion = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [rows] = await pool.query("DELETE FROM instituciones WHERE instituciones_id = ?", [
//       id,
//     ]);

//     if (rows.affectedRows <= 0) {
//       return res.status(404).json({ message: "institucion no encontrada" });
//     }

//     res.sendStatus(204);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Algo fue mal al momento de eliminar" });
//   }
// };

//crear institucion
export const createInstlinks = async (req, res) => {
  try {
    //aqui se obtienen esos datos
    const {llave, url, instituciones_instituciones_id} = req.body;
    const [rows] = await pool.query(
      //FALTA AÑADIR subsector_subsector_id FK, logo (blob)
      "INSERT INTO institucion_tiene_links(linkin,llave, url, instituciones_instituciones_id) VALUES (NULL,?,?,?)",
      [llave,url, instituciones_instituciones_id]
    );
    res.status(201).json({
        linkin: rows.insertId,
        llave,
        url, 
        instituciones_instituciones_id
    });
  } catch (error) {
    return res.status(500).json({error, message: "Algo fue mal en la creacion del link" });
  }
};

// //actualizar institucion por id
// export const updateInstitucion = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       nombre,
//       email,
//       institucion,
//       telefono,
//       resena,
//       telefonowp,
//       ubicacion,
//     } = req.body;

//     const [result] = await pool.query(
//       //query largo xd
//       //mucho ojo con cada campo, el update en tabla correcta
//       //sintaxis sql, etc

//       "UPDATE instituciones SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), institucion = IFNULL(?, institucion), telefono = IFNULL(?, telefono),resena = IFNULL(?, resena),telefonowp = IFNULL(?, telefonowp),ubicacion = IFNULL(?, ubicacion) WHERE instituciones_id = ?",
//       [nombre, email, institucion, telefono, resena, telefonowp, ubicacion, id]
//     );

//     if (result.affectedRows === 0)
//       return res.status(404).json({ message: "Institucion no encontrada" });

//     const [rows] = await pool.query(
//       "SELECT * FROM instituciones WHERE instituciones_id = ?",
//       [id]
//     );

//     res.json(rows[0]);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({error,  message: "Algo fue mal al actualizar la institucion" });
//   }
// };

