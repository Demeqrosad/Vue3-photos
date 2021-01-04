const express = require('express');
const router = express.Router();

const photos = require('../controllers/photos.controller');

router.get('/photos/id/:id', photos.loadById);
router.get('/photos/:page', photos.loadAll);
router.get('/photos/:category/:page', photos.loadByCategory);
router.post('/photos', photos.add);
router.put('/photos/vote/:id', photos.vote);

module.exports = router;
