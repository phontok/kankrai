const paddle = require('../../lib/paddle');
const env = require('../../lib/environment');

module.exports = (req, res) => {
  const params = req.body;
  if (!paddle.verifySignature(params, env.PADDLE_PUBLIC_KEY)) {
    res.status(500).send({
      error: 'invalid signature',
    });
    return;
  }

  paddle.handlePayload(params);

  res.send({ result: 'ok' });
};
