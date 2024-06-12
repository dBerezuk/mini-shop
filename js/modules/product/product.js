const product = document.querySelector('.product');

function viewProduct(id) {
  product.classList.add('product--active');
  product.dataset.id = id;

  const currentProduct = findProduct(id);

  product.querySelector('.product__title').textContent = currentProduct.title;
  product.querySelector('.product__img').src = `./images/${currentProduct.imgUrl}`;
  product.querySelector('.product-price > p').innerHTML = currentProduct.oldPrice && `${priceFormatUk(currentProduct.oldPrice)}<span>₴</span>` || '';
  product.querySelector('.product-price > h6').innerHTML = `${priceFormatUk(currentProduct.price)}<span>₴</span>`;
  
  const productCharacteristics = product.querySelector('.product__data');
  productCharacteristics.innerHTML = '';

  currentProduct.characteristics.forEach(_ => {
    const li = document.createElement('li');
    li.classList.add('product__data-item');
  
    const spanTitle = document.createElement('span');
    spanTitle.textContent = _.title + ':';

    const spanValue = document.createElement('span');
    spanValue.textContent = _.value;

    li.append(spanTitle, spanValue);

    productCharacteristics.append(li);
  });
}

function productBuyFun(e) {
  e.currentTarget.classList.toggle('product__buy--active');
  productForm.classList.toggle('product__form--active');
}

function productFormFun(e) {
  e.preventDefault();

  const element = e.currentTarget;

  const validate = new Validate(element, product.dataset.id);
  validate.required('fio', 'Введите ФИО');
  validate.required('city', 'Выберете ваш город');
  validate.required('stock', 'Введите склад Новой почты для отправки');
  validate.required('payment', 'Выберете оплату');
  validate.required('count', 'Введите количество товара в цифрах');
  validate.minNum('count', 'Количетсво товара должно быть больше или ровно одному 1', 1);
  validate.required('comment', 'Введите коментарий');

  if(!validate.isError()) {
    element.reset();

    productBuy.classList.remove('product__buy--active');
    element.classList.remove('product__form--active');

    product.classList.remove('product--active');
    productsBox.classList.remove('products--active');

    categoryRemoveClassBtns();

    createOrder(validate.data);
  };
}

function findProduct(id) {
  return products.find(_ => _.id === +id);
}