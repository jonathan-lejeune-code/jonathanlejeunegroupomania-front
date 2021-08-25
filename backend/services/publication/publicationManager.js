'use strict';

const Models = require('../../models/index.js');

module.exports = class publicationManager
{
    /**
     * Permet d'ajouter une publication
     * 
     * @param json data {'userId': 2, 'content': 'Welcome'}
     */
    static create(data){
        return new Promise(
            (resolve, reject) => {
                // On insert la publication
                return Models.Publication
                    .create(data)
                    .then((newPost) => {
                        resolve(newPost);
                    })
                    .catch((error) => {
                        reject({
                            'msg': 'Une erreur est survenue lors de la création.',
                            'debug': error
                        });
                    });
            }
        );
    }
}
