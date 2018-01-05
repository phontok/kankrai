const productData = require('./assets/products.json');

const allProducts = () =>
  productData.map(product =>
    ({
      name: product.name,
      thumbnail: product.thumbnail,
      slug: product.slug,
      price: product.price,
    }));

const productWithSlug = slug =>
  productData.find(product => product.slug === slug);

module.exports = {
  allProducts,
  productWithSlug,
};
