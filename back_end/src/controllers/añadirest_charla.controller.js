import { pool } from "../db.js";
//Carpeta 3
//Aqui es donde se ejecuta la funcionalidad, querys y funciones
//con el export mandamos estas funciones asincronas a la carpeta 2

//El valor de la flag por defecto sera 1 en cada creacion
export const addStudentToCharla = async (req, res) => {
    try {
      const { cuenta_cuenta_id, charlas_charlas_id } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO Charla_tiene_estudiantes(estudcha_id, flag, cuenta_cuenta_id, charlas_charlas_id) VALUES (NULL, ?, ?, ?)",
        [1, cuenta_cuenta_id, charlas_charlas_id]
      );
      res.status(201).json({
        estudcha_id: rows.insertId,
        flag: 1,
        cuenta_cuenta_id,
        charlas_charlas_id
      });
    } catch (error) {
      return res.status(500).json({ error, message: "Algo fue mal en la creacion" });
    }
  };
  
