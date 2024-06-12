const productsBox = document.querySelector('.products');

function viewProducts(category) {
  productsBox.classList.add('products--active');
  productsItems.innerHTML = '';

  products
    .filter(_ => _.category === category)
    .forEach(_ => {
    productsItems.insertAdjacentHTML('beforeend', `
      <div class="products__item box" data-id="${_.id}">
        <img class="products__item-img" src="./images/${_.imgUrl}" alt="product">
        <h4 class="products__item-title">${_.title}</h4>
        <div class="product-price">
          ${ _.oldPrice ? `<p>${priceFormatUk(_.oldPrice)}<span>₴</span></p>` : '' }
          <h6>${priceFormatUk(_.price)}<span>₴</span></h6>
        </div>
      </div>
    `);
  });
}

function productsItemsFun(e) {
  const item = e.target.closest('.products__item');

  if(!item) return;

  viewProduct(item.dataset.id);
}