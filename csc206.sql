-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 06, 2024 at 09:43 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csc206`
--

-- --------------------------------------------------------

--
-- Table structure for table `csc206`
--

CREATE TABLE `csc206` (
  `time` datetime NOT NULL,
  `temprature` decimal(10,0) NOT NULL,
  `relativehumidity` int(11) NOT NULL,
  `pressure` float NOT NULL,
  `altitude` float NOT NULL,
  `oxygenlevel` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `csc206`
--

INSERT INTO `csc206` (`time`, `temprature`, `relativehumidity`, `pressure`, `altitude`, `oxygenlevel`) VALUES
('2024-04-06 09:19:34', 14, 13, 33333300000, 111, 4),
('2024-04-06 09:19:53', 21, 1, 1, 1, 1),
('2024-04-06 09:20:17', 111, 11111, 11111, 1111, 1111),
('2024-04-06 09:20:30', 222, 2222, 22222, 22222, 22222),
('2024-04-06 09:20:45', 555, 555, 555, 555, 555),
('2024-04-06 09:21:28', 777, 777, 777, 777, 777),
('2024-04-06 09:21:55', 0, 0, 0, 0, 0),
('2024-04-06 09:22:31', 1111, 1111, 1111, 1111, 1111);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
