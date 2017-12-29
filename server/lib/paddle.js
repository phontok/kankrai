const serialize = require('php-serialize');
const crypto = require('crypto');

module.exports = {
  verifySignature: (params, publicKey) => {
    const signature = params.p_signature;
    delete params.p_signature;
    const serialize = Serialize.serialize(Object.keys(params).sort().reduce((r, k) => (r[k] = params[k], r), {}));

    const verify = crypto.createVerify('RSA-SHA1');
    verify.write(serialize);
    verify.end();

    return verify.verify(publicKey, signature, 'base64');
  },

  handlePayload: (payload) => {
    
  }
};
