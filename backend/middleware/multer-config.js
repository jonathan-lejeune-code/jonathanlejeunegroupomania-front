const multer = require("multer"); //on importe le package multer

const MIME_TYPES = {
  //les formats d'images (exentions) qu'on peut recevoir du frontend et la façon dont on va les convertir
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  //on va enregister sur le disque
  //storage indique à multer d'enregistrer les fichiers dans le dossier images
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    //filename indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores et d'ajouter un timestamp Date.now() comme nom de fichier. Elle utilise ensuite la constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée
    const name = file.originalname.split(" ").join("_");
    const finalname = name.split(".")[0];
    const extension = MIME_TYPES[file.mimetype]; //notre liste d'exentions correspond aux liste reçu par le frontend
    callback(null, finalname + Date.now() + "." + extension); //Date.now() est un timestamp permettant d'afficher les millisecondes écoulé depuis le 1er janvier 1970
  },
});

module.exports = multer({ storage: storage }).single("inputFile"); //("image")
//on exporte multer entièrement configuré, lui passons notre constante storage et lui indiquons que nous gérerons uniquement les téléchargements de fichiers image.