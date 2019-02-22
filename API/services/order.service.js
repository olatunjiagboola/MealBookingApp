import dummyData from '../utils/dummyData';
import Order from '../models/order.model';

const OrderService = {
  fetchOrders() {
    return dummyData.Orders.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.customer_id = order.customer_id;
      newOrder.vendor_id = order.vendor_id;
      newOrder.meal = order.meal;
      newOrder.dateCreated = order.dateCreated;
      return newOrder;
    });
  },

  addOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.Orders[orderLength - 1].id;
    const newId = lastId + 1;

    order.id = newId;

    dummyData.orders.push(order);
    return order;
  },
};

export default OrderService;
