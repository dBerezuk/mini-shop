function createOrder(data) {
  const myOrdersArr = JSON.parse(localStorage.getItem('my-orders')) || [];
  const orderNewId = myOrdersArr.reduce((id, currentId) => Math.max(id, currentId.id), 0) + 1;

  myOrdersArr.push({
    id: orderNewId,
    data
  });

  localStorage.setItem('my-orders', JSON.stringify(myOrdersArr));

  myOrdersListView(orderNewId);
  sms(data);
}

function deleteOrder(order, id) {
  const myOrdersArr = JSON.parse(localStorage.getItem('my-orders'));
  const myOrdersNewArr = myOrdersArr.filter(_ => _.id !== id);

  localStorage.setItem('my-orders', JSON.stringify(myOrdersNewArr));

  order.remove();
}

function findOrder(id) {
  const myOrdersArr = JSON.parse(localStorage.getItem('my-orders'));

  return myOrdersArr.find(_ => _.id === +id);
}