Groupomania-OC - Projet 7 - frontend

Description : Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

1- cloner le dossier frontend  
git clone
git front:https://github.com/jonathan-lejeune-code/jonathanlejeunegroupomania-front

2 - Exécutez la commande npm install

3 - Exécutez la commande npm run serve

4 - Clonez le repository : git clone
git back:https://github.com/jonathan-lejeune-code/jonathanlejeunegroupomania-back

5 - Exécutez la commande npm install

La Base de données :

D'autre part, assurez-vous d'avoir MySQL. Dans le dossier backend => config => config.json , renseignez le username, password et le nom de votre base de données(les informations renseignées lors du processus de création de votre base de données).

Créez localement la base de donnée « nom_devotrebase ».

Dans l'invite de commande déplacez vous dans le dossier backend : cd backend , tapez sequelize db:create , puis sequelize db:migrate , (assurez vous que sequelize-cli est bien installé)

Dans le dossier backend => models => index.js , suivez les instructions pour créer un compte modérateur , enregistrez les modifications , puis lancez nodemon / node server.
