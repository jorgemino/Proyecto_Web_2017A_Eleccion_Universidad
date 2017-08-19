/**
 * Pizzas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cabecerap: {
      type: "string"
    },
    pregunta: {
      type: "string"
    },
    opcion1: {
      type: "string"
    },
    opcion2: {
      type: "string"
    },
    opcion3: {
      type: "string"
    },
    opcion4: {
      type: "string"
    },
    opcion5: {
      type: "string"
    },
    correcta:
      {
        type:"int"
      },


    fkIdUsuario:{
      model:'User',
      required:true
    },
  }
};

