const fetchProducts = async (product) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const { results } = await response.json();
    return results;
  } catch (err) {
    return new Error('You must provide an url');
  }
};
// const path = `${url}${product}`;
// await fetch(path)
// .then((response) => response.json)
// .then((data) => data.results)
// .catch((err) => console.log(err));
// };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
