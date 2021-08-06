const express = require('express');// Utilisation du framework Express
const bodyParser = require('body-parser'); // Extraire les objets au format Json
const xss = require('xss-clean'); // Nettoyage des entrées des utilisateurs
const helmet = require("helmet");// Utilisation helmet pour protéger notre application de certaines vulnérabilités
const path = require('path'); // Traiter les requêtes image
const mysql = require('mysql'); // Utilisation bdd 

// Routes vers les éléments
const routesPosts = require('./routes/Post');
const routesUsers = require('./routes/User');
const routesMod = require('./routes/Mod');

const router = express.Router();

const app = express();

// Utilisation body-parser pour extraire les objets en Json dans les requêtes de type POST
app.use(bodyParser.json());

// Utilisation de la route path pour reconnaître les requêtes images
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});


/////////////// Joining routes ///////////////////////
app.use('/api/posts', routesPosts);
app.use('/api/auth', routesUsers);
app.use('/api/moderation', routesMod);


app.use (helmet());
app.use(xss());



module.exports = app;