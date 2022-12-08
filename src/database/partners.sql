--
-- Database: `partners`
--
-- --------------------------------------------------------
--
-- Table structure for table `partner_details`
--

CREATE TABLE IF NOT EXISTS `partner_details` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,

  PRIMARY KEY (`_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10001 ;

--
-- Dumping data for table `partner_details`
--

INSERT INTO `partner_details` (`_id`, `name`) VALUES
(1, 'Ryan McDaniel'),
(2, 'Alana Aragon'),
(3, 'Brianna Carney'),
(4, 'Laura Botel' ),
(5, 'James Laff'),
(6, 'Alexa Nunes'),
(7, 'Audrey Park'),
(8, 'Ben Cauffman'),
(9, 'Candace Martin'),
(10, 'Jeremy Vogel'),
(11, 'Jordan Williams'),
(12, 'Matthew Garza'),
(13, 'Serena Amos'),
(14, 'Stanley Chen'),
(15, 'Rami Abdelghafar');   
 
