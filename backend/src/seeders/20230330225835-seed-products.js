'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('products', [
      {
        "name":"Tears of Steel",
        "description":"In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
        "image":"https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
      
     },
      {
        "name":"Big Buck Bunny",
        "description":"Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
     },
     {
        "name":"Sintel",
        "description":"A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
        "image":"http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
        
     },
     
     {
        "name":"Elephant's Dream",
        "description":"Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
        "image":"https://download.blender.org/ED/cover.jpg",
     },
     {
      "name":"Big Buck Bunny",
      "description":"Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
      "image":"https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
   },
   {
      "name":"Sintel",
      "description":"A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
      "image":"http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
      
   },
   
   {
      "name":"Elephant's Dream",
      "description":"Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
      "image":"https://download.blender.org/ED/cover.jpg",
   }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
