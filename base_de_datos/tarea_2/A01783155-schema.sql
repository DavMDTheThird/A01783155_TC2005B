-- Hecho por David Medina Dominguez
-- Scheme de la tarea 2
--
--

SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS tarea2;
CREATE SCHEMA tarea2;
USE tarea2;

--
-- Estructura de tabla para la tabla `pais`
--
CREATE TABLE pais (
nombre_pais VARCHAR(45) NOT NULL,
num_participantes SMALLINT UNSIGNED NOT NULL,
num_medallas SMALLINT UNSIGNED NOT NULL,
PRIMARY KEY (nombre_pais)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `deportista`
--
CREATE TABLE deportista (
matricula SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
nombre VARCHAR(45) NOT NULL,
apellidos VARCHAR(45) NOT NULL,
sexo VARCHAR(6) NOT NULL,
pais VARCHAR(45) NOT NULL,
PRIMARY KEY (matricula),
FOREIGN KEY (pais) REFERENCES pais (nombre_pais)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `disciplina `
--
CREATE TABLE disciplina  (
disciplina_ID SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
nombre_categoria VARCHAR(45) NOT NULL,
disciplina  VARCHAR(45) NOT NULL,
PRIMARY KEY (disciplina_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `prueba`
--
CREATE TABLE prueba (
prueba_ID SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
disciplina_ID SMALLINT UNSIGNED NOT NULL,
fecha DATE NOT NULL,
lugar VARCHAR(45) NOT NULL,
num_total_deportistas SMALLINT UNSIGNED NOT NULL,
naturaleza VARCHAR(45) NOT NULL,
PRIMARY KEY (prueba_ID),
FOREIGN KEY (disciplina_ID) REFERENCES disciplina (disciplina_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `clasificacion`
--
CREATE TABLE clasificacion (
matricula SMALLINT UNSIGNED NOT NULL,
prueba_ID SMALLINT UNSIGNED NOT NULL,
rango SMALLINT UNSIGNED,
FOREIGN KEY (matricula) REFERENCES deportista (matricula),
FOREIGN KEY (prueba_ID) REFERENCES disciplina (disciplina_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `resultado`
--
CREATE TABLE resultado (
disciplina_ID SMALLINT UNSIGNED NOT NULL,
matricula_oro SMALLINT UNSIGNED,
matricula_plata SMALLINT UNSIGNED,
matricula_bronce SMALLINT UNSIGNED,
FOREIGN KEY (disciplina_ID) REFERENCES disciplina (disciplina_ID),
FOREIGN KEY (matricula_oro) REFERENCES deportista (matricula),
FOREIGN KEY (matricula_plata) REFERENCES deportista (matricula),
FOREIGN KEY (matricula_bronce) REFERENCES deportista (matricula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

