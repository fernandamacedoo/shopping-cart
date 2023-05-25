export const fetchProduct = async (param) => {
  if (!param || param === {}) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${param}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (param) => {
  if (!param || param === {}) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const data = await response.json();
  return data.results;
};
