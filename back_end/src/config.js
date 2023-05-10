import { config } from "dotenv";
config();
//el de arriba es para que se configure segun las variables del sistema del usuario
//aun falta por configurar es un ".env"

//AQUI se deben cambiar las variables segun cada base de datos
//Usualmente solo se necesita cambiar DB_PASSWORD
// si les falla fijente en el DB_USER o si estan
//con la bdd correcta DB_DATABASE, de ultimos casos fijense DB_USER
export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "1234";
export const DB_DATABASE = process.env.DB_DATABASE || "feria";
export const DB_PORT = process.env.DB_PORT || 3306;
