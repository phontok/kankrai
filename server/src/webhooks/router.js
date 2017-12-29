const router = require('express').Router();
const paddleHandler = require('./paddle');

router.post('/paddle', paddleHandler);

module.exports = router;
