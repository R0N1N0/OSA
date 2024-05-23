-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-05-2024 a las 21:54:08
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

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
  `id_comentario` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_mv` int DEFAULT NULL,
  `comentario` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_comentario`),
  KEY `fk_comentario_usuario` (`id_usuario`),
  KEY `fk_comentario_mv` (`id_mv`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `comentario_usuario_mv`
--

INSERT INTO `comentario_usuario_mv` (`id_comentario`, `id_usuario`, `id_mv`, `comentario`) VALUES
(1, 9, 9, 'hola vaya maquina, me ha gustado mucho la verdad'),
(2, 9, 9, 'esta maquina no esta mal ? no entiendo porque tiene pocas descargas'),
(3, 9, 9, 'holaaa soy bassou oumira y esta maquina la verdad es que me ha encantado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `id_grupo` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_grupo`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id_grupo`, `nombre`) VALUES
(2, 'Offensive'),
(10, 'bassou');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invitaciones_usuario_grupo`
--

DROP TABLE IF EXISTS `invitaciones_usuario_grupo`;
CREATE TABLE IF NOT EXISTS `invitaciones_usuario_grupo` (
  `id_invitaciones_usuario_grupo` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_grupo` int DEFAULT NULL,
  PRIMARY KEY (`id_invitaciones_usuario_grupo`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_grupo` (`id_grupo`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `invitaciones_usuario_grupo`
--

INSERT INTO `invitaciones_usuario_grupo` (`id_invitaciones_usuario_grupo`, `id_usuario`, `id_grupo`) VALUES
(8, 18, 10);

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
  `hash` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_mv`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `mv`
--

INSERT INTO `mv` (`id_mv`, `nombre`, `descripcion`, `puntos`, `dif`, `imagen`, `enlace`) VALUES
(10, 'Miles', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 3, 'Facil', 'https://www.cnet.com/a/img/resize/c104e53d4126eabbc309e413a534658a107140ff/hub/2020/11/12/da63f82d-5371-4c52-89a4-8b39bab98316/miles-morales-on-avengers-tower.jpg?auto=webp&fit=crop&height=1200&width=1200', '#####', "#####"),
(9, 'Spidey', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 5, 'Facil', 'https://i.pinimg.com/originals/ce/5a/ce/ce5acead2a981ea3e689d79f24ef883b.png', '#####', "#####"),
(8, 'Gotham', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 7, 'Medio', 'https://images.desenio.com/zoom/wb0043-8batman-gothamcityskyline50x70-33443-38474.jpg', '#####', "#####"),
(7, 'Gotham', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fuga dignissimos hic debitis. Iure, voluptatibus.', 10, 'Dificil', 'https://erikstore.com/blog/wp-content/uploads/2023/09/Batman-day-origen.webp', '#####', "#####");

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `premio`
--

DROP TABLE IF EXISTS `premio`;
CREATE TABLE IF NOT EXISTS `premio` (
  `id_premio` int NOT NULL AUTO_INCREMENT,
  `nombre` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `descripcion` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `imagen` text COLLATE ucs2_spanish_ci,
  PRIMARY KEY (`id_premio`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `premio`
--

INSERT INTO `premio` (`id_premio`, `nombre`, `descripcion`, `imagen`) VALUES
(2, 'meme de los memes', 'un meme de un meme de un meme', 'https://preview.redd.it/dont-let-this-meme-die-saddam-hussein-hiding-place-memes-i-v0-6diqk73l5n291.png?width=640&crop=smart&auto=webp&s=3c0770a12a0ffb3fe998419a40f1abf73955395e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `password` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `codigo` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci NOT NULL,
  `imagen` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `rol` text CHARACTER SET ucs2 COLLATE ucs2_spanish_ci,
  `puntos` int DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `codigo`, `imagen`, `rol`, `puntos`) VALUES
(9, 'bassou', '$2b$10$LV3ngnbQm9UPYj8odUKhN.rjVooBrpHFs0.K2BERv.NDg8HjiyWGu', '0', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1710800491/eqasqusivj1genpchcua.jpg', 'usuario', 0),
(16, 'oumirabassou@gmail.com', '$2b$10$bwVQqReKIxtF80nPeKE/Yep4nNryBngFEh3FC3G00WEETrjm0lBLm', '0', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1714085402/gpi1225yinhvwlwvdfuo.jpg', 'usuario', 0),
(18, 'Paula', '$2b$10$A/LpPNHj.RYHFnNHoqGb0eOECWGjCMKpma8PVVpAGYh2/IWQsOKt.', 'Pa26708', 'https://res.cloudinary.com/dpn3ptqf2/image/upload/v1715463694/f1boxqj6fmchhmauwopk.jpg', 'usuario', 0);

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
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_grupo`
--

INSERT INTO `usuario_grupo` (`id_usuario_grupo`, `id_usuario`, `id_grupo`, `admin`) VALUES
(3, 9, 3, 1),
(2, 9, 2, 0),
(4, 9, 4, 1),
(5, 9, 5, 1),
(6, 9, 6, 1),
(10, 9, 10, 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_premio`
--

INSERT INTO `usuario_premio` (`id_usuario_premio`, `id_premio`, `id_usuario`) VALUES
(1, 1, 9),
(3, 2, 9),
(4, NULL, 9);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
