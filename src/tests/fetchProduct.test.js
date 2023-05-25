import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toEqual('function');
  });
  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('retorno da função fetchProduct com argumento MLB1405519561 é igual ao objeto product', async () => {
    const result = await fetchProduct('MLB1405519561');
    expect(result).toEqual(product);
  });
  it('retorna erro se argumento vazio', () => {
    expect(fetchProduct()).rejects.toThrow('ID não informado');
  })
});
