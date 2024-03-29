import { pool } from "../db.js";
//Carpeta 3
export const getCharlas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM charlas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo fue mal" });
  }
};
//obtener charla por id
export const getCharlaID = async (req, res) => {
  try {
    //creamos una const para guardar el parametro 
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM charlas WHERE charlas_id = ?",
      [id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "No existe la charla" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({error, message: "Algo fue mal al obtener la charla, revise el ID por favor" });
  }
};
//se necesita id para le delete
export const deleteCharla = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM charlas WHERE charlas_id = ?", [
      id,
    ]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "charla no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo fue mal al momento de eliminar" });
  }
};

//crear charla
export const createCharla = async (req, res) => {
  try {
    //aqui se obtienen esos datos
    const {nombrecharla, link, fechaInicio, fechaFina, Cupos_charla, Cupos_disponibles, instituciones_instituciones_id} = req.body;
    const [rows] = await pool.query(
      //FALTA AÑADIR subsector_subsector_id FK, logo (blob)
      "INSERT INTO charlas(charlas_id, nombrecharla, link, fechaInicio, fechaFina, Cupos_charla, Cupos_disponibles, instituciones_instituciones_id) VALUES (NULL,?, ?, ?, ?, ?, ?, ?)",
      [nombrecharla, link, fechaInicio, fechaFina, Cupos_charla, Cupos_disponibles, instituciones_instituciones_id]
    );
    res.status(201).json({
        charlas_id: rows.insertId,
        nombrecharla, 
        link, 
        fechaInicio, 
        fechaFina, 
        Cupos_charla, 
        Cupos_disponibles, 
        instituciones_instituciones_id
    });
  } catch (error) {
    return res.status(500).json({error, message: "Algo fue mal en la creacion" });
  }
};

//actualizar charla por id
export const updateCharla = async (req, res) => {
  try {
    const { id } = req.params;
    const {
        nombrecharla, 
        link, 
        fechaInicio,
        fechaFina,
        Cupos_charla,
        Cupos_disponibles,
        instituciones_instituciones_id
    } = req.body;

    const [result] = await pool.query(
      //query largo xd
      //mucho ojo con cada campo, el update en tabla correcta
      //sintaxis sql, etc

      "UPDATE charlas SET nombrecharla = IFNULL(?, nombrecharla), link = IFNULL(?, link), fechaInicio = IFNULL(?, fechaInicio), fechaFina = IFNULL(?, fechaFina),Cupos_charla = IFNULL(?, Cupos_charla),Cupos_disponibles = IFNULL(?, Cupos_disponibles),instituciones_instituciones_id = IFNULL(?, instituciones_instituciones_id) WHERE charlas_id = ?",
      [nombrecharla, link, fechaInicio, fechaFina, Cupos_charla, Cupos_disponibles, instituciones_instituciones_id, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Institucion no encontrada" });

    const [rows] = await pool.query(
      "SELECT * FROM charlas WHERE charlas_id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({error,  message: "Algo fue mal al actualizar la charla" });
  }
};