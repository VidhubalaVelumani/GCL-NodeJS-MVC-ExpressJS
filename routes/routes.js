var express = require('express');
var userController = require('../userController');

const router = express.Router();



router.route('/user/getAll').get(function handler(request,response){
    console.log("Hi");
    userController.getDataControllerfn(request,response);
});




module.exports = router;




