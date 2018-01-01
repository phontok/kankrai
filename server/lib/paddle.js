const Serialize = require('php-serialize');
const crypto = require('crypto');

module.exports = {
  verifySignature: (params, publicKey) => {
    const p = params;
    const signature = p.p_signature;
    delete p.p_signature;
    const serialize = Serialize.serialize(Object.keys(p)
      .sort()
      .reduce((r, k) => {
        const ret = r;
        ret[k] = params[k];
        return ret;
      }, {}));

    const verify = crypto.createVerify('RSA-SHA1');
    verify.write(serialize);
    verify.end();

    return verify.verify(publicKey, signature, 'base64');
  },

  handlePayload: (payload) => {
    console.log(payload);
  },
};
