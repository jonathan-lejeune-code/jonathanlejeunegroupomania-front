const jwt = require("jsonwebtoken"); // on importe le packgae qui créé et vérifie les token
require("dotenv").config(); //permet de cacher le mots de passe autres utilisateurs sur github (enregistré dans .env)

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // on récupère la valeur token reçu dans la requête
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN); // on compare le token ainsi que le "mot de passe" token reçu est le même que celui déclaré dans la partie login
    const userId = decodedToken.userId; // on récupère l'id utilisateur de notre token
    console.log("REQUESBODY", req.body);
    if (req.body.userId && req.body.userId !== userId) {
      // on compare si l'id reçu dans le corps de la requête est le même que celui présent dans le token
      throw "Invalid user ID"; //throw permet de transférer l'erreur dans le catch
    } else {
      next(); // si il n'y a pas d'erreur on peut passer à la fonction suivante
    }
  } catch {
    // si il y a une erreur on la relève ici
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};