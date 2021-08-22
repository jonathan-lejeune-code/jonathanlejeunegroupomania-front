const express = require("express"); //toujours besoin d'express avant de créer un routeur
const router = express.Router(); //on enregistre les routes dans notre routeur Express(on vient de créer), puis enregistrer celui-ci dans l'application
const routescontrollers = require("../controllers/user"); //on associe le controller a la routes
const auth = require("../middleware/auth"); // on importe la fonction qui permet de vérifier les tokens et sécuriser les différentes routes
const multer = require("../middleware/multer-config"); // on importe la fonction multer de récupérer les fichiers images provenant du frontend

router.post("/signup", multer, routescontrollers.signup); // on utilise des routes post car le frontend envoie des informations des utilisateurs
router.post("/login", routescontrollers.login);
router.get("/me", auth, routescontrollers.Profiluser);
router.get("/all", auth, routescontrollers.AllProfiluser);
router.delete("/delete", auth, routescontrollers.SupProfile);
module.exports = router;