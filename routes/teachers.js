const express = require('express');
const router = express.Router();

const teachersController = require('../controllers/teachersController');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', authenticateToken, teachersController.getAllTeachers);

module.exports = router;
