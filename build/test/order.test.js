"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should();

describe('Order Endpoint Testing', function () {
  // Test to get all Orders
  it('should list ALL Orders on / GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/orders').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('customer_id');
      res.body.data[0].should.have.property('meal');
      res.body.data[0].should.have.property('vendor_id');
      res.body.data[0].should.have.property('dateCreated');
      console.log(res.body.data);
      done();
    });
  });
});
describe('add an order on / POST', function () {
  // Test to add an order
  it('should return the added order', function (done) {
    var addedOrder = {
      "customer_id": 3,
      "vendor_id": 7,
      "dateCreated": '16/02/2019',
      "meal": [{
        id: 9,
        name: 'Ewa agoyin and bread',
        price: '500'
      }, {
        id: 3,
        name: 'Cucumber salad',
        price: '700'
      }]
    };

    _chai.default.request(_index.default).post('/api/v1/orders').send(addedOrder).end(function (err, res) {
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('dateCreated');
      res.body.data.should.have.property('vendor_id');
      res.body.data.should.have.property('customer_id');
      res.body.data.should.have.property('meal');
      console.log(res.body.data);
      done();
    });
  });
});
describe('update an order on /PUT/:id', function () {
  // Test to update an order
  it('should return the updated order', function (done) {
    var orderUpdate = {
      "meal": [{
        id: 10,
        name: 'Jollof rice and Chicken',
        price: '500'
      }]
    };

    _chai.default.request(_index.default).put("/api/v1/orders/".concat(1)).send(orderUpdate).end(function (err, res) {
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('dateCreated');
      res.body.data.should.have.property('vendor_id');
      res.body.data.should.have.property('customer_id');
      res.body.data.should.have.property('meal');
      console.log(res.body.data);
      done();
    });
  });
});
//# sourceMappingURL=order.test.js.map