import { pool } from "../db.js";
//Datos de la empresa, cupos, url reu
export const getDatosCompletos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT a.nombre, b.url, c.nombrecharla, c.fechaInicio, c.fechaFina,c.Cupos_disponibles FROM instituciones a,Charla_tiene_links b,charlas c WHERE c.instituciones_instituciones_id=a.instituciones_id AND c.charlas_id=b.charlas_charlas_id ");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo fue mal" });
  }
};
//Datos de la empresa
export const getNombreEmpresa = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT a.nombre, a.descripcion FROM instituciones a,Charla_tiene_links b,charlas c WHERE c.instituciones_instituciones_id=a.instituciones_id AND c.charlas_id=b.charlas_charlas_id ");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Algo fue mal" });
    }
};
//Cupos de la reu
export const getCupos = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT a.nombre,c.Cupos_disponibles, c.fechaInicio, c.fechaFina,c.Cupos_disponibles FROM instituciones a,charlas c WHERE c.instituciones_instituciones_id = a.instituciones_id");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Algo fue mal" });
    }
};
//Todas las empresas
export const getInstituciones = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT nombre FROM instituciones");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Algo fue mal" });
    }
  };