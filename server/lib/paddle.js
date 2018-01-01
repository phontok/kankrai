const Serialize = require('php-serialize');
const crypto = require('crypto');
const { Order } = require('../models');

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
    console.log(payload); // eslint-disable-line no-console
    if (!('alert_name' in payload)) {
      return Promise.reject(new Error('Invalid payload'));
    }
    switch (payload.alert_name) {
      case 'payment_succeeded':
        return Order
          .create({
            external_id: payload.order_id,
            currency: payload.currency,
            earnings: payload.earnings,
            fee: payload.fee,
            sale_gross: payload.sale_gross,
            tax: payload.payment_tax,
            product_id: payload.product_id,
            email: payload.email,
            payload,
          });
      case 'order_fulfilment':
        return Promise.reject(new Error('Currently unhandled.'));
      default:
        /* This is a message we don't support yet */
        return Promise.reject(new Error('Unhandled alert type.'));
    }
  },
};
