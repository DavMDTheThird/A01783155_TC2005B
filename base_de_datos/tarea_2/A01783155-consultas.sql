-- Hecho por David Medina Dominguez
-- Observar datos
--
--
USE tarea2;

--
-- Ejercicio #1
-- Apellidos y nombre de los participantes de nacionalidad mexicana.
SELECT apellidos, nombre FROM tarea2.deportista WHERE tarea2.deportista.pais = 'Mexico';

--
-- Ejercicio #2
-- Apellidos, nombre y puntos acumulados de los participantes de USA.
-- SELECT deportista.apellidos, deportista.nombre, pais.num_medallas  FROM tarea2 WHERE deportista.pais = 'Estados Unidos';
SELECT deportista.apellidos, deportista.nombre, pais.num_medallas FROM deportista 
JOIN pais ON deportista.pais = pais.nombre_pais WHERE deportista.pais = 'Estados Unidos';

--
-- Ejercicio #3
-- Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
SELECT deportista.apellidos, deportista.nombre FROM deportista
JOIN clasificacion ON deportista.matricula = clasificacion.matricula WHERE clasificacion.rango = 1;

--
-- Ejercicio #4
-- Nombre de las competencias en las que intervinieron los participantes mexicanos.
SELECT disciplina.nombre_categoria, disciplina.disciplina FROM deportista
JOIN clasificacion ON deportista.matricula = clasificacion.matricula
JOIN disciplina ON clasificacion.prueba_ID = disciplina.disciplina_ID
WHERE deportista.pais = 'Mexico';

--
-- Ejercicio #5
-- Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
SELECT deportista.apellidos, deportista.nombre FROM deportista
WHERE deportista.matricula NOT IN (SELECT clasificacion.matricula FROM clasificacion WHERE clasificacion.rango = 1);

--
-- Ejercicio #6
-- Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
SELECT deportista.apellidos, deportista.nombre FROM deportista 
JOIN clasificacion ON deportista.matricula = clasificacion.matricula WHERE clasificacion.rango IS NOT NULL;

--
-- Ejercicio #7
-- Nombre de la competencia que aporta el máximo de puntos. 
-- No hay categoria de puntos.............

--
-- Ejercicio #8
-- Países (nacionalidades) que participaron en todas las competencias.
SELECT deportista.pais FROM deportista INNER JOIN pais ON deportista.pais = pais.nombre_pais
WHERE NOT EXISTS (
    SELECT * FROM prueba
    WHERE NOT EXISTS (
        SELECT * FROM clasificacion WHERE clasificacion.matricula = deportista.matricula 
        AND clasificacion.prueba_ID = prueba.prueba_ID));

--
-- Ejercicio #9     
-- Porpongan una consulta que involucre una sola tabla con alguna funcion como MIN, AVG. 
-- Encontrar la primera fecha de la BD
SELECT MIN(fecha) AS primera_fecha FROM prueba;

--
-- Ejercicio #10
-- Porpongan una consulta que involucre dos tabla con GROUP BY
-- Obtener el número total de participantes por país y categoría de competencia
SELECT d.pais, di.nombre_categoria, COUNT(*) AS total_participantes FROM deportista d
JOIN clasificacion c ON d.matricula = c.matricula
JOIN disciplina di ON c.prueba_ID = di.disciplina_ID
GROUP BY d.pais, di.nombre_categoria;

--
-- Ejercicio #11
-- Porpongan una consulta que involucre tres tablas con las sentencias LEFT JOIN, ORDER BY, GROUP BY Y LIMIT
-- Ver el numero de clasifiaciones totales
SELECT d.apellidos, d.nombre, p.nombre_pais, COUNT(c.matricula) AS total_clasificaciones
FROM deportista d
LEFT JOIN clasificacion c ON d.matricula = c.matricula
LEFT JOIN pais p ON d.pais = p.nombre_pais
GROUP BY d.apellidos, d.nombre, p.nombre_pais
ORDER BY total_clasificaciones DESC
LIMIT 6;

--
-- Ejercicio #12
-- Porpongan una consulta que involucre tres tablas con las sentencias INNER JOIN y LIKE
-- Saber quienes y que pais representan los de la carrera
SELECT d.apellidos, d.nombre, p.nombre_pais
FROM deportista d
INNER JOIN clasificacion c ON d.matricula = c.matricula
INNER JOIN disciplina di ON c.prueba_ID = di.disciplina_ID
INNER JOIN pais p ON d.pais = p.nombre_pais
WHERE di.nombre_categoria LIKE '%carrera%';




