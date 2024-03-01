-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-03-2024 a las 12:46:19
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
  `descripcio` text COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT NULL,
  `dif` text COLLATE ucs2_spanish_ci,
  `imagen` blob,
  `enlace` text COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_mv`)
) ;

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
  `nombre` text COLLATE ucs2_spanish_ci,
  `apellido` text COLLATE ucs2_spanish_ci,
  `username` text COLLATE ucs2_spanish_ci,
  `password` text COLLATE ucs2_spanish_ci,
  `imagen` blob,
  `rol` text COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `username`, `password`, `imagen`, `rol`, `puntos`) VALUES
(1, 'bassou', 'oumira', 'bassou', '1234', NULL, 'Admin', 0);

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
