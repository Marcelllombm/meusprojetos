const express = require('express');
const router = express.Router();
const controller = require('../controllers/askController');

router.get('/perguntar', controller.get);
router.post('/salvarpergunta',controller.post);

module.exports=router;