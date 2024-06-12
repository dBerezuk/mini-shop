const dataSmsTitles = {
  fio: 'ФИО',
  city: 'Город',
  stock: 'Склад',
  payment: 'Выбор оплаты',
  count: 'Количество',
  comment: 'Коментарий',
  createAt: 'Дата создания'
}

const priceFormatUk = price => new Intl.NumberFormat('uk-UA').format(price);

const dateFormatDMY = (date = new Date()) => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;