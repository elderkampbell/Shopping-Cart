const url = ('https://api.mercadolibre.com/sites/MLB/search?q=');

const fetchProducts = async (product) => {
    const path = `${url}${product}`;
    await fetch(path)
    .then((response) => response.json)
    .then((data) => data.results)
    .catch((err) => console.log(err));
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
