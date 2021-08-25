'use strict';

const Models = require('../../models/index.js');

module.exports = class userManager
{
    /**
     * Récupere un utilisateur suivant une condition de recherche
     * 
     * @param json whereCLause {'id': 2}
     */
    static findOne(whereCLause){
        return Models.User
            .findOne({
                'where': whereCLause
            });
    }
}
