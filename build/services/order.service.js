"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderService = {
  fetchOrders: function fetchOrders() {
    return _dummyData.default.Orders.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.customer_id = order.customer_id;
      newOrder.vendor_id = order.vendor_id;
      newOrder.meal = order.meal;
      newOrder.dateCreated = order.dateCreated;
      return newOrder;
    });
  },
  addOrder: function addOrder(order) {
    var orderLength = _dummyData.default.Orders.length;
    var lastId = _dummyData.default.Orders[orderLength - 1].id;
    var newId = lastId + 1;

    var newOrder = _objectSpread({
      id: newId
    }, order);

    _dummyData.default.Orders.push(newOrder);

    return newOrder;
  },
  updateOrder: function updateOrder(id, orderUpdate) {
    var orderIndex = _dummyData.default.Meals.findIndex(function (meal) {
      return meal.id === id;
    });

    var oldOrder = _objectSpread({}, _dummyData.default.Orders[orderIndex]);

    var updatedOrder = {
      id: id,
      vendor_id: oldOrder.vendor_id,
      customer_id: oldOrder.customer_id,
      dateCreated: oldOrder.dateCreated,
      meal: orderUpdate.meal ? orderUpdate.meal : oldOrder.meal
    };
    _dummyData.default.Orders[orderIndex] = updatedOrder;
    return updatedOrder;
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=order.service.js.map