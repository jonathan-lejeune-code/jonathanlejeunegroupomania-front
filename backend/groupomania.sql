

CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,         
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` INT UNSIGNED DEFAULT NULL,  
  `createdAt` date NOT NULL,
  `updatedAt` time NOT NULL ,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)            
) 
ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
CREATE TABLE `publications` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  `userId` INT UNSIGNED NOT NULL,
  `date` DATETIME NOT NULL,
  `title` VARCHAR(50) NOT NULL,             
  `content` TEXT NOT NULL,      
  `createdAt` date NOT NULL,
  `updatedAt` time NOT NULL,            
  PRIMARY KEY (`id`),
  KEY `fk_userId` (`userId`),            
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  )                                                                                                         


