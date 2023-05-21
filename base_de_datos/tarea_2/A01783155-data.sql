-- Hecho por David Medina Dominguez
-- Data de la tarea 2
--
--

--
-- Insertar en la tabla pais
--
INSERT INTO pais (nombre_pais, num_participantes, num_medallas)
VALUES ('Mexico', 100, 20),('Japon', 150, 31),
('España', 90, 16),('Canada', 75, 26),
('Estados Unidos', 130, 27),('Brazil', 69, 15),
('Egipto', 77, 13),('India', 30, 6),
('China', 200, 40),('Francia', 95, 27);

--
-- Insertar en la tabla pais
--
INSERT INTO deportista (matricula, nombre, apellidos, sexo, pais)
VALUES (01, 'Jueanito', 'Perez Rodriguez', 'hombre', 'Mexico'),
(02, 'María', 'García López', 'mujer', 'España'),
(03, 'Alex', 'Smith', 'hombre', 'Estados Unidos'),
(04, 'Sophie', 'Dubois', 'mujer', 'Francia'),
(05, 'Ravi', 'Patel', 'hombre', 'India'),
(06, 'Ana', 'Santos', 'mujer', 'Brasil'),
(07, 'Mohammed', 'Ali', 'hombre', 'Egipto'),
(08, 'Isabella', 'Martinez', 'mujer', 'Mexico'),
(09, 'Hiroshi', 'Tanaka', 'hombre', 'Japón'),
(10, 'Martha', 'López', 'mujer', 'Canada');

--
-- Insertar en la tabla disciplina
--
INSERT INTO disciplina (disciplina_ID, nombre_categoria, disciplina)
VALUES (0100, '1 Km carrera', 'natacion'),
(0200, 'Salto de altura', 'atletismo'),
(0300, 'Patinaje artístico', 'patinaje'),
(0400, 'Lanzamiento de disco', 'atletismo'),
(0500, 'Salto sincronizado', 'clavados'),
(0600, 'Ciclismo de montaña', 'ciclismo'),
(0700, 'Lucha libre', 'lucha'),
(0800, 'Salto con pértiga', 'atletismo'),
(0900, 'Equitación de salto', 'equitación'),
(1000, 'Gimnasia rítmica', 'gimnasia');

--
-- Insertar en la tabla prueba
--
INSERT INTO prueba (prueba_ID, disciplina_ID, fecha, lugar, num_total_deportistas, naturaleza)
VALUES (9201, 0100, '2022-07-15', 'Piscina Olímpica', 50, 'eliminatoria'),
(9202, 0500, '2022-07-16', 'Centro Acuático', 30, 'semifinal'),
(9203, 0300, '2022-07-17', 'Pista de Patinaje', 40, 'final'),
(9204, 0700, '2022-07-18', 'Coliseo de Lucha', 20, 'eliminatoria'),
(9205, 0600, '2022-07-19', 'Circuito de Ciclismo', 60, 'semifinal'),
(9206, 0600, '2022-07-20', 'Circuito de Ciclismo', 10, 'final'),
(9207, 0900, '2022-07-20', 'Centro Ecuestre', 25, 'final'),
(9208, 0200, '2022-07-21', 'Estadio Olímpico', 80, 'eliminatoria'),
(9209, 0400, '2022-07-22', 'Estadio Olímpico', 40, 'final'),
(9210, 1000, '2022-07-23', 'Gimnasio Olímpico', 35, 'semifinal'),
(9211, 0800, '2022-07-24', 'Estadio Olímpico', 60, 'final');

--
-- Insertar en la tabla clasificacion
--
INSERT INTO clasificacion (matricula, prueba_ID, rango)
VALUES (01, 0100, 7),
(02, 0700, 1),
(03, 0200, 2),
(04, 0300, 5),
(05, 0400, NULL),
(06, 0500, 3),
(07, 0600, 9),
(08, 0800, 6),
(09, 0900, 1),
(10, 1000, 10);

--
-- Insertar en la tabla clasificacion
--
INSERT INTO resultado (disciplina_ID, matricula_oro, matricula_plata, matricula_bronce)
VALUES (0100, 06, 03, 09),
(0200, 12, 18, 27),
(0300, 17, 24, 08),
(0400, 05, 11, 14),
(0500, 10, 23, 31),
(0600, 22, 19, 04),
(0700, 01, 07, 15),
(0800, 13, 02, 20),
(0900, 28, 21, 16),
(1000, 30, 25, 26);
