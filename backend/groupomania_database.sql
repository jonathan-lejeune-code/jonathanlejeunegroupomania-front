/* Nous devons créer 3 tables :
/* Une table pour les utilisateurs
/* Une table pour les posts reliée à la table des utilisateurs
/* Une table pour les commentaires reliée à la table des posts et des utilisateurs*/

/* Table utilisateurs*/

CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,/* INT (nombre entier) UNSIGNED (on commence à partir de ) NOT NULL (Toujours renseigné) AUTO_INCREMENT (incrémentation automatique)*/
  `lastName` VARCHAR(255) NOT NULL,         /* VARCHAR (Nombre de caractères)*/
  `firstName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `moderation` INT UNSIGNED DEFAULT NULL,   /* NOUS METTONS EN PLACE UNE COLONNE POUR LA VALIDATION PAR LE MODERATEUR*/
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)              /*La contrainte UNIQUE garantit que toutes les valeurs d'une colonne sont différentes pour éviter l'incription de 2 utilisateurs*/
) 
ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8; /* la valeur AUTO_INCREMENT défini le numéro de départ de l'incrémentation dans la table*/

/* Table Posts*/
CREATE TABLE `posts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, /* INT (nombre entier) UNSIGNED (on commence à partir de 0) NOT NULL (Toujours renseigné) AUTO_INCREMENT (incrémentation automatique)*/
  `userId` INT UNSIGNED NOT NULL,
  `date` DATETIME NOT NULL,
  `title` VARCHAR(50) NOT NULL,              /* VARCHAR (Nombre de caractères)*/
  `content` TEXT NOT NULL,                  /* TEXT nous permet de stocker des textes de plus de 255 caractères)*/
  PRIMARY KEY (`id`),
  KEY `fk_userId` (`userId`),              /* On nomme la clé étrangère*/
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE/* On identifie la colonne sur lesquelles on crée la clé et la colonne de référence dans l'autre table*/
  )                                                                                                          /* les règles DELETE et UPDATE cascade vont nous permettre de supprimer ou mettre à jour les lignes dans les tables parent et enfant*/
ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/* Table Commentaires*/ 
CREATE TABLE `comments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,/* INT (nombre entier) UNSIGNED (on commence à partir de 0) NOT NULL (Toujours renseigné) AUTO_INCREMENT (incrémentation automatique)*/
  `userId` INT UNSIGNED NOT NULL,
  `postId` INT UNSIGNED NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, /* DATETIME (date/heure) par défaut la date courante à partir de TIMESTAMP si l'utilisateur ne renseigne pas la date*/
  `comContent` VARCHAR(255) NOT NULL,                 /* VARCHAR (Nombre de caractères)*/
  PRIMARY KEY (`id`),
  KEY `fk_comments_postId` (`postId`),                /* On nomme les clés étrangères*/
  KEY `fk_comments_userId` (`userId`),
  /* On va lier les 2 tables*/
  CONSTRAINT `fk_comments_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, /* On identifie la colonne sur lesquelles on crée la clé et la colonne de référence dans l'autre table*/
  CONSTRAINT `fk_comments_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE /* les règles DELETE et UPDATE cascade vont nous permettre de supprimer ou mettre à jour les lignes dans les tables parent et enfant*/
)
 ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;