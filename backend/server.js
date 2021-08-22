// IMPORTANT https requiert un certificat SSL à obtenir avec un nom de domaine, il permet de crypter les données en transit ("évite les attaques de l'homme du milei")
const http = require("http"); //on importe le paquages http de node, l'objet http permet de créer un serveur
const app = require("./app"); //permet d'importe l'application express et de l'utiliser sur le serveur

const normalizePort = (val) => {
  //la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne(configure le port de connection en fonction de l'environnement)
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port); //permet de dire à l'application express sur quel port elle doit tourner

const errorHandler = (error) => {
  //la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app); //permet d'appeler la fonction express
//l'objet http + create serveur(app) permet de créer un serveur avec express
// la fonction (créer dans express) reçoit une requête et une response à chaque envoie au serveur

// Lance le serveur et affiche sur quel port se connecter ou gère les erreurs s'il y en a
server.on("error", errorHandler);
server.on("listening", () => {
  // un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(process.env.PORT || 3000); //écoute les requêtes envoyé par le serveur
//le port 3000 et le port par défault, sinon on utilise le port que l'environnement du serveur utillise