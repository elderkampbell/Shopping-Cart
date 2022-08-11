require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('Testa se fetchItem é uma função', () => {
  test('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testa se a função fetch foi chamada ao executar fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  test('Testa se executando fetchItem com o argumento MLB1615760527, fetch utiliza o determinado endpoint', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Testa o retorno da função fetchItem com o argumento MLB1615760527', () => {
    expect(fetchItem('MLB1615760527')).toEqual(item);
  });
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });

});
