'use strict';

const categoriesBox = document.querySelector('.categories-list'),
      myOrdersBtn   = document.getElementById('my-orders-btn'),
      myOrders      = document.querySelector('.my-orders'),
      productsItems = document.querySelector('.products__items'),
      productBuy    = document.querySelector('.product__buy-btn'),
      productForm   = document.querySelector('.product__form');

categoriesBox.addEventListener('click', categoriesBoxFun);

productsItems.addEventListener('click', productsItemsFun);

productBuy.addEventListener('click', productBuyFun);

productForm.addEventListener('submit', productFormFun);

myOrdersBtn.addEventListener('click', myOrdersBtnFun);

myOrders.addEventListener('click', myOrdersFun);

myOrdersListView();