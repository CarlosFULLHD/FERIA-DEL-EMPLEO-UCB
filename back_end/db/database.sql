CREATE DATABASE IF NOT EXISTS feria;

USE feria;

CREATE TABLE instituciones (
    instituciones_id bigint  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(200)  NOT NULL,
    email varchar(200)  NOT NULL,
    institucion varchar(200)  NOT NULL,
    telefono varchar(50)  NOT NULL,
    resena varchar(280)  NOT NULL,
    telefonowp varchar(50)  NOT NULL,
    ubicacion varchar(280)  NOT NULL
);
DESCRIBE instituciones;

INSERT INTO instituciones values 
  (1, 'Banco BISA', 'bancobisa@gmail.com','bancaria','22256584','Banco bisa siempre tuyo','+591 7554654','Av Libertador #1233'),
  (2, 'Banco Mercantil SantaCruz', 'bancobisa@gmail.com','bancaria','22256546','Besto banco','+591 7235640','Av Simon bolivar #2222'),
  (3, 'TOYOTA', 'toyosa@gmail.com','autos','2123132','RUN RUN FRANCHESCO','+591 73024872','Av Wallace #3333');

CREATE TABLE INSTITUCIONES_TIENE_IMAGENES (IMAGEN_ID BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
											URL VARCHAR(255),
                                            INSTITUCIONES_ID BIGINT NOT NULL,
                                            CONSTRAINT FK_INSTITUCIONES_IMAGENES
                                            FOREIGN KEY(INSTITUCIONES_ID)
                                            REFERENCES INSTITUCIONES(INSTITUCIONES_ID)
                                            );
DESC INSTITUCIONES_TIENE_IMAGENES;
SELECT * FROM INSTITUCIONES_TIENE_IMAGENES;

TRUNCATE TABLE INSTITUCIONES_TIENE_IMAGENES;
                                            
											
