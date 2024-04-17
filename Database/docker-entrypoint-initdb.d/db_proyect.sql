-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-04-2024 a las 09:41:49
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
  `comentario` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
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
  `nombre` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_grupo`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id_grupo`, `nombre`) VALUES
(1, 'OSA'),
(26, 'bababa'),
(19, 'hehehe'),
(29, 'bababa'),
(30, 'bababa'),
(31, 'bababa'),
(32, 'bababa'),
(42, 'hahaha'),
(43, 'hahaha'),
(44, 'hahaha'),
(46, 'hey'),
(57, 'heyy'),
(50, 'BASSOU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mv`
--

DROP TABLE IF EXISTS `mv`;
CREATE TABLE IF NOT EXISTS `mv` (
  `id_mv` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `descripcion` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT NULL,
  `dif` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `imagen` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `enlace` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_mv`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `mv`
--

INSERT INTO `mv` (`id_mv`, `nombre`, `descripcion`, `puntos`, `dif`, `imagen`, `enlace`) VALUES
(10, 'Miles', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 3, 'Facil', 'https://www.cnet.com/a/img/resize/c104e53d4126eabbc309e413a534658a107140ff/hub/2020/11/12/da63f82d-5371-4c52-89a4-8b39bab98316/miles-morales-on-avengers-tower.jpg?auto=webp&fit=crop&height=1200&width=1200', '#####'),
(9, 'Spidey', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 5, 'Facil', 'https://i.pinimg.com/originals/ce/5a/ce/ce5acead2a981ea3e689d79f24ef883b.png', '#####');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premio`
--

DROP TABLE IF EXISTS `premio`;
CREATE TABLE IF NOT EXISTS `premio` (
  `id_premio` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `descripcion` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `imagen` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_premio`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `premio`
--

INSERT INTO `premio` (`id_premio`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'meme', 'un meme de un meme', 'https://www.adobe.com/es/express/create/media_147b85d9e4cb15b95023a74537b8dd2058027f26f.png?width=750&format=png&optimize=medium'),
(2, 'meme de los memes', 'un meme de un meme de un meme', 'https://preview.redd.it/dont-let-this-meme-die-saddam-hussein-hiding-place-memes-i-v0-6diqk73l5n291.png?width=640&crop=smart&auto=webp&s=3c0770a12a0ffb3fe998419a40f1abf73955395e'),
(3, 'jacaio gaming', 'Mejor tienda de petardos y petardas.', 'https://s3-media0.fl.yelpcdn.com/bphoto/AHKPifN1QUzLos5tResYlQ/o.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci NOT NULL,
  `password` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci NOT NULL,
  `imagen` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `rol` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `imagen`, `rol`) VALUES
(9, 'bassou', '$2b$10$LV3ngnbQm9UPYj8odUKhN.rjVooBrpHFs0.K2BERv.NDg8HjiyWGu', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710800491/eqasqusivj1genpchcua.jpg', 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_grupo`
--

DROP TABLE IF EXISTS `usuario_grupo`;
CREATE TABLE IF NOT EXISTS `usuario_grupo` (
  `id_usuario_grupo` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_grupo` int DEFAULT NULL,
  `admin` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario_grupo`),
  KEY `fk_usuario_grupo` (`id_usuario`),
  KEY `fk_grupo_usuario` (`id_grupo`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_grupo`
--

INSERT INTO `usuario_grupo` (`id_usuario_grupo`, `id_usuario`, `id_grupo`, `admin`) VALUES
(3, 9, 8, 1),
(4, 9, 9, 1),
(5, 9, 10, 1),
(6, 9, 11, 1),
(7, 9, 12, 1),
(8, 9, 13, 1),
(9, 9, 14, 1),
(10, 9, 15, 1),
(11, 9, 16, 1),
(12, 9, 17, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_mv`
--

DROP TABLE IF EXISTS `usuario_mv`;
CREATE TABLE IF NOT EXISTS `usuario_mv` (
  `id_usuario_mv` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_mv` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_mv`),
  KEY `fk_usuario_mv` (`id_usuario`),
  KEY `fk_mv_usuario` (`id_mv`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_mv`
--

INSERT INTO `usuario_mv` (`id_usuario_mv`, `id_usuario`, `id_mv`) VALUES
(1, 9, 10),
(2, 9, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_premio`
--

DROP TABLE IF EXISTS `usuario_premio`;
CREATE TABLE IF NOT EXISTS `usuario_premio` (
  `id_usuario_premio` int NOT NULL AUTO_INCREMENT,
  `id_premio` int DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_premio`),
  KEY `id_premio` (`id_premio`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_premio`
--

INSERT INTO `usuario_premio` (`id_usuario_premio`, `id_premio`, `id_usuario`) VALUES
(57, 1, 9),
(56, 2, 9);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
