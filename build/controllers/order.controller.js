"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchOrders: function fetchOrders(req, res) {
    var Orders = _order.default.fetchOrders();

    return res.json({
      status: 'Success',
      data: Orders
    }).status(200);
  },
  addOrder: function addOrder(req, res) {
    var order = req.body;

    var createdOrder = _order.default.addOrder(order);

    return res.json({
      status: 'Success',
      data: createdOrder
    }).status(201);
  },
  updateOrder: function updateOrder(req, res) {
    var id = req.params.id;
    var orderUpdate = req.body;

    var updatedOrder = _order.default.updateOrder(parseInt(id, 10), orderUpdate);

    return res.json({
      status: 'Success',
      data: updatedOrder
    });
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map