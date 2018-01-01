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

  paddle
    .handlePayload(params)
    .then(() => res.status(200).send({ result: 'ok' }))
    .catch(error => res.status(400).send(error));
};
