# Host: localhost  (Version: 5.5.53)
# Date: 2019-01-21 22:22:31
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('1','','',299,0,'韩国进口 AHC 透明质酸神仙水乳礼盒套装 水100ml+乳100ml+水30ml+乳30ml 保湿滋润','img/listpro1.jpg','img/11.png','199','6万','AHC海外旗舰店','自营','满减','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(59) DEFAULT NULL,
  `userpass` varchar(59) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('15294231051','x899'),('',''),('15294231666','nsw22e'),('15009446729','nsw22e'),('15294231098','nsw22e435'),('15294231052','pyr111306'),('15294231052','pyr111306'),('15294231053','pyr111306'),('15294231054','p434'),('15294231055','de33333'),('18409492576','de111111'),('15395243053','pp0000'),('15374898909','kjh8989');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

#
# Structure for table "useremail"
#

DROP TABLE IF EXISTS `useremail`;
CREATE TABLE `useremail` (
  `username` varchar(59) DEFAULT NULL,
  `userpass` varchar(59) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "useremail"
#

/*!40000 ALTER TABLE `useremail` DISABLE KEYS */;
INSERT INTO `useremail` VALUES ('1844883911@qq.com','pj2221');
/*!40000 ALTER TABLE `useremail` ENABLE KEYS */;
