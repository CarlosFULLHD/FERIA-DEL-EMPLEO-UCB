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


--Nueva bdd ediciones 3.0
--Detalles: NO USAMOS FERIA NI FOREIGN KEYS, seguimos con las mismas instituciones
--
-- Table: Feria POR AHORA LA TABLA FERIA NO SERA USADA
CREATE TABLE Feria (
    feria_id bigint  NOT NULL AUTO_INCREMENT,
    nombre varchar(200)  NOT NULL,
    fechainicio timestamp  NOT NULL,
    fechafinal timestamp  NOT NULL,
    CONSTRAINT Feria_pk PRIMARY KEY (feria_id)
);

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
-- Table: cuenta
CREATE TABLE cuenta (
    cuenta_id bigint  NOT NULL AUTO_INCREMENT,
    cuenta varchar(200)  NOT NULL,
    pwd varchar(200)  NOT NULL,
    superusuario int  NOT NULL,
    email varchar(200)  NOT NULL,
    CONSTRAINT cuenta_pk PRIMARY KEY (cuenta_id)
);
-- Table: charlas
CREATE TABLE charlas (
    charlas_id bigint  NOT NULL AUTO_INCREMENT,
    nombrecharla varchar(250)  NOT NULL,
    link varchar(500)  NOT NULL,
    fechaInicio timestamp  NOT NULL,
    fechaFina timestamp  NOT NULL,
    Cupos_charla int  NOT NULL,
    Cupos_disponibles int  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT charlas_pk PRIMARY KEY (charlas_id)
);

-- tables
-- Table: Charla_tiene_estudiantes
CREATE TABLE Charla_tiene_estudiantes (
    estudcha_id bigint  NOT NULL AUTO_INCREMENT,
    flag int  NOT NULL,
    cuenta_cuenta_id bigint  NOT NULL,
    charlas_charlas_id bigint  NOT NULL,
    CONSTRAINT Charla_tiene_estudiantes_pk PRIMARY KEY (estudcha_id)
);

-- Table: Charla_tiene_links
CREATE TABLE Charla_tiene_links (
    linkcha_id bigint  NOT NULL AUTO_INCREMENT,
    url varchar(280)  NOT NULL,
    charlas_charlas_id bigint  NOT NULL,
    CONSTRAINT Charla_tiene_links_pk PRIMARY KEY (linkcha_id)
);
-- Table: Institucion_tiene_links
CREATE TABLE Institucion_tiene_links (
    linkin bigint  NOT NULL AUTO_INCREMENT,
    url varchar(280)  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT Institucion_tiene_links_pk PRIMARY KEY (linkin)
);
-- Table: instituciones_tiene_imagenes
CREATE TABLE instituciones_tiene_imagenes (
    imagenin_id bigint  NOT NULL AUTO_INCREMENT,
    url varchar(255)  NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT instituciones_tiene_imagenes_pk PRIMARY KEY (imagenin_id)
);
-- Table: instituciones_tiene_videos
CREATE TABLE instituciones_tiene_videos (
    videoin_id bigint  NOT NULL AUTO_INCREMENT,
    url varchar(255) NOT NULL,
    instituciones_instituciones_id bigint  NOT NULL,
    CONSTRAINT instituciones_tiene_videos_pk PRIMARY KEY (videoin_id)
);

-- foreign keys
-- Reference: Charla_tiene_estudiantes_charlas (table: Charla_tiene_estudiantes)
ALTER TABLE Charla_tiene_estudiantes ADD CONSTRAINT Charla_tiene_estudiantes_charlas FOREIGN KEY Charla_tiene_estudiantes_charlas (charlas_charlas_id)
    REFERENCES charlas (charlas_id);

-- Reference: Charla_tiene_estudiantes_cuenta (table: Charla_tiene_estudiantes)
ALTER TABLE Charla_tiene_estudiantes ADD CONSTRAINT Charla_tiene_estudiantes_cuenta FOREIGN KEY Charla_tiene_estudiantes_cuenta (cuenta_cuenta_id)
    REFERENCES cuenta (cuenta_id);

-- Reference: Charla_tiene_links_charlas (table: Charla_tiene_links)
ALTER TABLE Charla_tiene_links ADD CONSTRAINT Charla_tiene_links_charlas FOREIGN KEY Charla_tiene_links_charlas (charlas_charlas_id)
    REFERENCES charlas (charlas_id);

-- Reference: Feria_tiene_charlas_instituciones (table: charlas)
ALTER TABLE charlas ADD CONSTRAINT Feria_tiene_charlas_instituciones FOREIGN KEY Feria_tiene_charlas_instituciones (instituciones_instituciones_id)
    REFERENCES instituciones (instituciones_id);

-- Reference: Institucion_tiene_links_instituciones (table: Institucion_tiene_links)
ALTER TABLE Institucion_tiene_links ADD CONSTRAINT Institucion_tiene_links_instituciones FOREIGN KEY Institucion_tiene_links_instituciones (instituciones_instituciones_id)
    REFERENCES instituciones (instituciones_id);

-- Reference: instituciones_tiene_imagenes_instituciones (table: instituciones_tiene_imagenes)
ALTER TABLE instituciones_tiene_imagenes ADD CONSTRAINT instituciones_tiene_imagenes_instituciones FOREIGN KEY instituciones_tiene_imagenes_instituciones (instituciones_instituciones_id)
    REFERENCES instituciones (instituciones_id);

-- Reference: instituciones_tiene_videos_instituciones (table: instituciones_tiene_videos)
ALTER TABLE instituciones_tiene_videos ADD CONSTRAINT instituciones_tiene_videos_instituciones FOREIGN KEY instituciones_tiene_videos_instituciones (instituciones_instituciones_id)
    REFERENCES instituciones (instituciones_id);    