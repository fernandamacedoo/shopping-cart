import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toEqual('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('retorno da função fetchProductsList com argumento computador é igual ao objeto computadorSearch', async () => {
    const result = await fetchProductsList('computador');
    expect(result).toEqual(computadorSearch);
  });
  
  it('retorna erro se argumento vazio', () => {
    expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  })
});
