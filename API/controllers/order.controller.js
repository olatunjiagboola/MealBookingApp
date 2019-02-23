import OrderService from '../services/order.service';

const OrderController = {
  fetchOrders(req, res) {
    const Orders = OrderService.fetchOrders();
    return res.json({
      status: 'Success',
      data: Orders,
    }).status(200);
  },

  addOrder(req, res) {
    const order = req.body;
    const createdOrder = OrderService.addOrder(order);
    return res.json({
      status: 'Success',
      data: createdOrder,
    }).status(201);
  },

  updateOrder(req, res) {
    const { id } = req.params;
    const orderUpdate = req.body;
    const updatedOrder = OrderService.updateOrder(parseInt(id, 10), orderUpdate);
    return res.json({
      status: 'Success',
      data: updatedOrder,
    });
  },
};

export default OrderController;
