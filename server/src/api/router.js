const router = require('express').Router();
const { allProducts, productWithSlug } = require('./products');

router.get('/products', (req, res) => {
  res.json(allProducts());
});

router.get('/products/:slug', (req, res) => {
  const product = productWithSlug(req.params.slug);
  if (product === undefined) {
    res.sendStatus(404);
  } else {
    res.json(product);
  }
});

module.exports = router;
