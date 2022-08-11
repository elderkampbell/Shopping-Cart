const fetchItem = async (productid) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${productid}`);
    const { results } = await response.json();
    return results;
  } catch (err) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
