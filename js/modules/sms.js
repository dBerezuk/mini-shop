function sms(data) {
  const sms = document.querySelector('.sms');
  const smsDataOrder = document.getElementById('sms-order');

  if(!data) {
    return sms.classList.remove('sms--active');
  };

  const {productId, ...rest} = data;
  const {title, category, price} = findProduct(productId);

  document.getElementById('sms-product-title').textContent = title;
  document.getElementById('sms-product-category').textContent = category;
  document.getElementById('sms-product-price').textContent = priceFormatUk(price);
  
  smsDataOrder.innerHTML = '';

  Object.keys(rest).forEach(_ => {
    const li = document.createElement('li');
    li.classList.add('sms__data-item');
  
    const spanTitle = document.createElement('span');
    spanTitle.textContent = (dataSmsTitles[_] || 'Другое') + ':';
  
    const spanValue = document.createElement('span');
    spanValue.textContent = data[_];

    li.append(spanTitle, spanValue);

    smsDataOrder.append(li);
  });

  sms.classList.add('sms--active');
}