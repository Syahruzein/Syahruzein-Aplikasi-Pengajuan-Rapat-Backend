const { Router } = require("express");
const router = Router();
const controller = require('../controllers/notulen.controller');

router.get('/:meet_id', controller.getMeetFinished);
router.post('/add', controller.addNotulen);
router.put('/update', controller.updateNotulen);
router.delete('/:id', controller.deleteNotulen);
router.get('/count-notulen', controller.countNotulen);

module.exports = router;