const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.getAll);
router.post('/', noteController.create);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.remove);

module.exports = router;
