//lieu on place l'application express
const express = require("express"); //on importe express qu'on a installer via le terminal
const bodyParser = require("body-parser"); //permet d'extraire l'objet JSON de la demande (Post) on importe body parser qu'on a installé via la terminal
const messagesroutes = require("./routes/messages"); //on importe les routeurs sur notre application
const userroutes = require("./routes/user");

const path = require("path"); // permet de créer la route affichant les images, on donne accès à un chemin permettant de gérer les fichiers (images)
const helmet = require("helmet"); //, permet d'éviter les attaques de type cross-site  scripting(qui consiste à pouvoir modifier le contenu d'une page html et trompé l'utilisateur) configure de manière appropriée des en-têtes HTTP.
const rateLimit = require("express-rate-limit"); // fixe un taux limite pour les requêtes (contre les attaques de force brutes)
const session = require("cookie-session"); //

//constante à utiliser avec le package rateLimit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // = 15 minutes
  max: 5000, //nbr requêtes (erreur) autorisés
});

require("dotenv").config(); //permet de cacher le mots de passe autres utilisateurs sur github (enregistré dans .env)
const app = express(); //permet de créer une application express

app.use((req, res, next) => {
  //méthode CORS pour assurer que le frontend fait des appel en sécurité vers mon api
  //cette middleware permet de créer des header dans notre response qu'on envoie au navigateur et qui a pour objectif "d'ouvrir" notre api aux utilisateurs effectuant une reqête
  res.setHeader("Access-Control-Allow-Origin", "*"); //ce header permet d'accéder à notre API depuis n'importe quelle origine ( '*' ), "*" veut dire tous le monde ;
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //ce header permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); // ce header permet d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  next();
});

// Partie sécurisation des cookies en utilisant le package cookie-session
const expiryDate = new Date(Date.now() + 3600000); // 1 heure (60 * 60 * 1000)
app.use(
  session({
    name: "session",
    keys: ["key1", "key2"],
    cookie: {
      secure: true, //garantit que le navigateur n’envoie le cookie que sur HTTPS
      httpOnly: true, //cookie envoyé que au http du client pas à son javascript, empêche d’accéder aux cookies en Javascript, les cookies ne seront pas accessibles, ce qui limitera la portée de l’attaque
      domain: "http://localhost:3000", // permet une comparaison avec le domaine du serveur dans lequel l’URL est demandée
      expires: expiryDate, //définie la date d’expiration des cookies persistants
    },
  })
);

app.use(bodyParser.json()); //permettra de traduire le corps de la reqûete reçu (POST) au format json //on définit l'url/chemin principal qu'utilisera notre routeur
app.use(helmet()); //collection de middleware pour Express qui aide à sécuriser les applications en définissant certaines headers HTTP
app.use(limiter); // application du package pour éviter attaque de force brute (permet de tester plusieurs mdp pour un utilisateur)
app.use("/images", express.static(path.join(__dirname, "images"))); //permet de charger les fichiers qui sont dans le repertoire images, gère les images de façon statique
app.use("/api/messages", messagesroutes); //on définit l'url/chemin principal qu'utilisera notre routeur (user.js)
app.use("/api/auth", userroutes);

module.exports = app;