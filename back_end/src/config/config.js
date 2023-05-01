//exportamos la conexion de la base de datos

module.exports = {
    port : process.env.PORT || 5174,
    db: {
        database: process.env.DB_NAME || 'FERIAUCB',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '1234',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
        }
    }
}
