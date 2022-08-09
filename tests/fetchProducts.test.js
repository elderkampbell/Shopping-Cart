require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Testa se a função fetch foi chamada ao executar fetchProducts', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  test('Testa se executando fetchProducts com o argumento computador, fetch utiliza determinado endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  test('Testa se o retorno da função fetchProducts com o argumento computador é igual a computadorSearch', async () => {
    expect(await fetchProducts('computador')).toBeEqual(computadorSearch)
  });
  test('', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });
});
