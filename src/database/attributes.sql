--
-- Database: `attributes`
--
-- --------------------------------------------------------
--
-- Table structure for table `attributes`
--

CREATE TABLE IF NOT EXISTS `attributes` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute` varchar(50) NOT NULL,

  PRIMARY KEY (`_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10001 ;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`_id`, `name`) VALUES
(1, 'attitude'),
(2, 'knowledge'),
(3, 'kindness'),
(4, 'patience' ),
(5, 'speed'),
(6, 'clarity'),
(7, 'accuracy'),
(8, 'pets');

