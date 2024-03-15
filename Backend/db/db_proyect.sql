-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-03-2024 a las 10:44:17
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_proyect`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario_usuario_mv`
--

DROP TABLE IF EXISTS `comentario_usuario_mv`;
CREATE TABLE IF NOT EXISTS `comentario_usuario_mv` (
  `id_comentario` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_mv` int DEFAULT NULL,
  `comentario` text COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_comentario`),
  KEY `fk_comentario_usuario` (`id_usuario`),
  KEY `fk_comentario_mv` (`id_mv`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `id_grupo` int NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_grupo`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mv`
--

DROP TABLE IF EXISTS `mv`;
CREATE TABLE IF NOT EXISTS `mv` (
  `id_mv` int NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE ucs2_spanish_ci,
  `descripcion` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT NULL,
  `dif` text COLLATE ucs2_spanish_ci,
  `imagen` text COLLATE ucs2_spanish_ci,
  `enlace` text COLLATE ucs2_spanish_ci,
  `descargas` int DEFAULT '0',
  PRIMARY KEY (`id_mv`)
) ;

--
-- Volcado de datos para la tabla `mv`
--

INSERT INTO `mv` (`id_mv`, `nombre`, `descripcion`, `puntos`, `dif`, `imagen`, `enlace`, `descargas`) VALUES
(1, 'Gotham', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ad laudantium, eius officia quae voluptatibus?', 10, 'Facil', 'https://images.desenio.com/zoom/wb0043-8batman-gothamcityskyline50x70-33443-38474.jpg', '###', 0),
(2, 'Riddler', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ad laudantium, eius officia quae voluptatibus?', 5, 'Facil', 'https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/909937/the-riddler-deluxe_dc-comics_gallery_61ae97335e7b0.jpg', '###', 0),
(3, 'Spidey', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit aliquam officiis, inventore nisi enim?', 10, 'Dificil', 'https://i.pinimg.com/originals/ce/5a/ce/ce5acead2a981ea3e689d79f24ef883b.png', '####', 0),
(4, 'Thor', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit aliquam officiis, inventore nisi enim?', 5, 'Dificil', 'https://www.mundodeportivo.com/alfabeta/hero/2023/11/template-54_3j4t.1700561720.8893.jpg?width=768&aspect_ratio=16:9&format=nowebp', '####', 0),
(5, 'Venom', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit aliquam officiis, inventore nisi enim?', 10, 'Facil', 'https://hips.hearstapps.com/hmg-prod/images/venom-2-fotogramas-1634239260.png?crop=0.566xw:1.00xh;0.168xw,0&resize=1200:*', '####', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premio`
--

DROP TABLE IF EXISTS `premio`;
CREATE TABLE IF NOT EXISTS `premio` (
  `id_premio` int NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE ucs2_spanish_ci,
  `descripcion` text COLLATE ucs2_spanish_ci,
  `imagen` blob,
  PRIMARY KEY (`id_premio`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` text COLLATE ucs2_spanish_ci,
  `password` text COLLATE ucs2_spanish_ci,
  `imagen` text COLLATE ucs2_spanish_ci,
  `rol` text COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `imagen`, `rol`, `puntos`) VALUES
(27, 'bassou', 'oumira', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710493711/w5ghj4yytmzb3hybuvht.jpg', NULL, 0),
(29, 'bassou', 'oumira', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710493837/ohrpnvoiqz1krvnpdk8y.jpg', NULL, 0),
(28, 'bassou', 'oumira', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710493810/huuhqqm8vir5mkf6j8t6.jpg', NULL, 0),
(30, 'bassou', '1234', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710494011/uhqlkpfczifr0fyhc9gl.png', NULL, 0),
(31, 'bassou', '1234', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710494026/k0aimjwum6dm42gc8d3u.png', NULL, 0),
(32, 'bass', '1234', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710494122/kgqw8dm83svy6ostayha.jpg', NULL, 0),
(33, 'hahaa', '21323', '', NULL, 0),
(34, 'basou', '1234', '', NULL, 0),
(35, 'hpñla', '1234', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710494537/exyqpqepxd8bxzkkaeme.png', NULL, 0),
(36, 'hehehe', '0101001', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710494566/xcshsw5qkzgwla6irbad.png', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_grupo`
--

DROP TABLE IF EXISTS `usuario_grupo`;
CREATE TABLE IF NOT EXISTS `usuario_grupo` (
  `id_usuario_grupo` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_grupo` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_grupo`),
  KEY `fk_usuario_grupo` (`id_usuario`),
  KEY `fk_grupo_usuario` (`id_grupo`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_mv`
--

DROP TABLE IF EXISTS `usuario_mv`;
CREATE TABLE IF NOT EXISTS `usuario_mv` (
  `id_usuario_mv` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_mv` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_mv`),
  KEY `fk_usuario_mv` (`id_usuario`),
  KEY `fk_mv_usuario` (`id_mv`)
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
