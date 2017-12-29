const paddle = require('../../lib/paddle');

module.exports = (req, res) => {
  const params = req.body;
  if (!paddle.verifySignature(params, 'PUBLIC KEY')) {
    res.status(500).send({
      "error": "invalid signature"
    });
    return;
  }

  paddle.handlePayload(params);

  res.send({result: 'ok'});
}
