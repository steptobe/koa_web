CREATE TABLE   IF NOT EXISTS  `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_info` json DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `article_title` varchar(255) DEFAULT NULL,
  `article` varchar(255) DEFAULT NULL,
  `hidden` int(11) DEFAULT NULL,
  `article_level` int(11) DEFAULT NULL,
  `article_status` int(11) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 