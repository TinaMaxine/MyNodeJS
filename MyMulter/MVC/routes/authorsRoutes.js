const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');

router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);

module.exports = router;
