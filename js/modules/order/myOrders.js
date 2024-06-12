function myOrdersBtnFun(e) {
  e.currentTarget.classList.toggle('menu__button--active');

  document.querySelector('.menu__categories').classList.toggle('menu__categories--close');
  myOrders.classList.toggle('my-orders--active');
}

function myOrdersFun(e) {
  const clickElement = e.target;
  const order = clickElement.closest('.my-orders__item');

  if(clickElement.closest('.my-orders__item-top') ) {
    order
      .querySelector('.my-orders__item-content')
      .classList.toggle('my-orders__item-content--active');   

  } else if(clickElement.closest('.my-orders__btn-delete') ) {
      deleteOrder(order, +order.dataset.id);
  }

  
}

function myOrdersListView(orderId) {
  if(orderId) {
    myOrdersListViewFind(findOrder(orderId), 'afterbegin');
  } else {
    JSON.parse(localStorage.getItem('my-orders'))
      ?.sort((a, b) => b.id - a.id)
      ?.forEach(data => myOrdersListViewFind(data));
  }
}

function myOrdersListViewFind({id, data: {productId, createAt, ...rest}}, position = 'beforeend') {
  const {title, category, price} = findProduct(productId);

  let myOrderListData = '';

  for(let key in rest) {
    myOrderListData += `
      <li class="my-orders__list-item">
        <span>${dataSmsTitles[key]}:</span>
        <span>${rest[key]}</span>
      </li>
    `
  }

  const product = `
    <article class="my-orders__item" data-id="${id}">
      <div class="my-orders__item-top">
          <p class="my-orders__item-date">${createAt}</p>
          <p class="my-orders__item-price"><span>${priceFormatUk(price)}</span>₴</p>
      </div>
      <div class="my-orders__item-content">
          <button class="my-orders__btn-delete" type="button">
            <img src="./images/icons/delete.svg" alt="delete order" />
          </button>
          <ul class="my-orders__list">
              <li class="my-orders__list-item">
                  <span>Название товара:</span>
                  <span>${title}</span>
              </li>
              <li class="my-orders__list-item">
                  <span>Категория товара:</span>
                  <span>${category}</span>
              </li>
              ${myOrderListData}
          </ul>
      </div>
    </article>
  `;

  myOrders.insertAdjacentHTML(position, product);
}