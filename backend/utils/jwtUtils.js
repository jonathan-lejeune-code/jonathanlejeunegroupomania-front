let jwt = require("jsonwebtoken");
require("dotenv").config(); //permet de cacher le mots de passe autres utilisateurs sur github (enregistré dans .env)

module.exports = {
  tokenSign: process.env.SECRET_TOKEN,
  generateToken: function (user) {
    return jwt.sign(
      //permet de signer notre token
      {
        userId: user.id, //dans la signature on insère les 2 paramètres suivants
        isAdmin: user.isAdmin,
      },
      this.tokenSign,
      {
        expiresIn: "24h",
      }
    );
  },

  getUserId: function (data) {
    if (data.length > 1) {
      let token = data.split(" ")[1]; // on récupère la valeur token
      try {
        let decodedToken = jwt.verify(token, this.tokenSign);
        userId = decodedToken.userId; // on récupère le userid présent dans le token
        return userId;
      } catch (err) {
        return err;
      }
    }
  },
};