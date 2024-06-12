function categoriesBoxFun(e) {
  const btn = e.target.closest('.categories-list__btn');

  if(!btn) return;
  if(btn.classList.contains('categories-list__btn--active')) return;

  categoryRemoveClassBtns();
  sms();

  btn.classList.add('categories-list__btn--active');

  viewProducts(btn.dataset.category);
}

function categoryRemoveClassBtns() {
  document.querySelectorAll('.categories-list__btn')
    .forEach(_ => _.classList.remove('categories-list__btn--active'));
}