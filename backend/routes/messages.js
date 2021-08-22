//le dossier ne contient que le chemin principal des routes, le contenu de la fonction des routes et dans le dossier controllers

const express = require("express");

const router = express.Router(); //on enregistre les routes dans notre routeur Express(on vient de créer), puis enregistrer celui-ci dans l'application
const messagescontrollers = require("../controllers/messages"); // on importe le controllers (la logique métier) correspondants aux routes
const auth = require("../middleware/auth"); // on importe la fonction qui permet de vérifier les tokens et sécuriser les différentes routes
const multer = require("../middleware/multer-config"); // on importe la fonction multer de récupérer les fichiers images provenant du frontend

// implantation de la méthode CRUD (création, lecture, modifiction, suppression)
//IMPORTANT on remplace app. par router. car maintenant on a les routes sur le routeur
router.post("/", auth, multer, messagescontrollers.creationobjet); // on place en argument la fonction qui sécurisera les différentes routes (auth)
router.delete("/:id", auth, messagescontrollers.supprimerobjet);
router.get("/", auth, messagescontrollers.affichetouslesprod);
router.post("/comments", auth, messagescontrollers.creationComment);
router.delete("/comments/:id", auth, messagescontrollers.supprimeComment);

module.exports = router;