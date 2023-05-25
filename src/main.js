import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

const sectionProducts = document.querySelector('.products');
const loadingText = document.querySelector('.loading');

try {
  const listaComputador = await fetchProductsList('computador');
  listaComputador.forEach((i) => sectionProducts.appendChild(createProductElement(i)));
} catch (e) {
  const error = document.createElement('h2');
  error.className = 'error';
  error.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionProducts.appendChild(error);
} finally {
  loadingText.remove();
}

const cartList = document.querySelector('.cart__products');
const productsId = document.querySelectorAll('.product__id');
const addProductBtn = document.querySelectorAll('.product__add');

addProductBtn.forEach((element, index) => element.addEventListener('click', async () => {
  const productId = productsId[index].innerText;
  saveCartID(productId);
  const product = await fetchProduct(productId);
  cartList.appendChild(createCartProductElement(product));
}));

const productStorage = getSavedCartIDs();
const cartProducts = productStorage.map((id) => fetchProduct(id));
const cartOrder = await Promise.all(cartProducts);

cartOrder.forEach((id) => cartList.appendChild(createCartProductElement(id)));
