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

SELECT * FROM employee;

--==================================================================================
-- Table: cuenta
CREATE TABLE cuenta (
    cuenta_id bigint  NOT NULL AUTO_INCREMENT,
    cuenta varchar(200)  NOT NULL,
    pwd varchar(200)  NOT NULL,
    superusuario bool  NOT NULL,
    email varchar(200)  NOT NULL,
    CONSTRAINT cuenta_pk PRIMARY KEY (cuenta_id)
);


-- Table: Institucion_tiene_links para formularios, linkedin otros
CREATE TABLE Institucion_tiene_links (
    linkin bigint  NOT NULL,
    url varchar(280)  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT Institucion_tiene_links_pk PRIMARY KEY (linkin)
);

-- Table: instituciones_tiene_videos
CREATE TABLE instituciones_tiene_videos (
    videoin_id bigint  NOT NULL,
    videos blob  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT instituciones_tiene_videos_pk PRIMARY KEY (videoin_id)
);
--==================================================================================
--Table: charlas
CREATE TABLE charlas (
    charlas_id bigint  NOT NULL AUTO_INCREMENT,
    charlas varchar(200)  NOT NULL,
    fechaInicio timestamp  NOT NULL,
    fechaFina timestamp  NOT NULL,
    Feria_feria_id bigint  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT charlas_pk PRIMARY KEY (charlas_id)
);

-- Table: Charla_tiene_links de zoom
CREATE TABLE Charla_tiene_links (
    linkcha_id bigint  NOT NULL,
    url varchar(280)  NOT NULL,
    charlas_charlas_id bigint  NOT NULL,
    CONSTRAINT Charla_tiene_links_pk PRIMARY KEY (linkcha_id)
);



-- Table: Charla_tiene_estudiantes
CREATE TABLE Charla_tiene_estudiantes (
    estudcha_id bigint  NOT NULL,
    cuenta_cuenta_id bigint  NOT NULL,
    Feria_tiene_charlas_charlas_id bigint  NOT NULL,
    flag bool  NOT NULL,
    CONSTRAINT Charla_tiene_estudiantes_pk PRIMARY KEY (estudcha_id)
);