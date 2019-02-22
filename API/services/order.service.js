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

    const newOrder = { id: newId, ...order };

    dummyData.Orders.push(newOrder);
    return newOrder;
  },

  updateOrder(id, orderUpdate) {
    const orderIndex = dummyData.Meals.findIndex(meal => meal.id === id);
    const oldOrder = { ...dummyData.Orders[orderIndex] };
    const updatedOrder = {
      id,
      vendor_id: oldOrder.vendor_id,
      customer_id: oldOrder.customer_id,
      dateCreated: oldOrder.dateCreated,
      meal: orderUpdate.meal ? orderUpdate.meal : oldOrder.meal,
    };

    dummyData.Orders[orderIndex] = updatedOrder;
    return updatedOrder;
  },
};

export default OrderService;
