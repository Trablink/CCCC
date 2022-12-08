--
-- Database: `ratings_scale`
--
-- --------------------------------------------------------
--
-- Table structure for table `ratings_scale`
--

CREATE TABLE IF NOT EXISTS `ratings_scale` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,

  PRIMARY KEY (`_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10001 ;

--
-- Dumping data for table `partner_details`
--

INSERT INTO `ratings_scale` (`_id`, `name`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);