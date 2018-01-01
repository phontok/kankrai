const router = require('express').Router();
const paddleHandler = require('./paddle');

router.post('/paddle', paddleHandler);
router.get('/', (req, res) => {
  res.send(`Hello from ${process.env.NODE_ENV}`);
});

module.exports = router;
