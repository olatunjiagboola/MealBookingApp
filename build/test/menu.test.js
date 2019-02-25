"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should();

describe('Menu Endpoint Testing', function () {
  // Test to get all Menu
  it('should list ALL menu on / GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/menu').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('day');
      res.body.data[0].should.have.property('meals');
      res.body.data[0].should.have.property('vendor_id');
      res.body.data[0].should.have.property('category');
      console.log(res.body.data);
      done();
    });
  });
});
describe('add a menu on / POST', function () {
  // Test to add a Meal
  it('should return the added menu', function (done) {
    var addedMenu = {
      "day": "17/02/2019",
      "category": "dinner",
      "vendor_id": 21,
      "meals": [{
        id: 1,
        name: 'Dodo and Gizzard',
        price: '500'
      }, {
        id: 2,
        name: 'Yam and Stew',
        price: '800'
      }, {
        id: 3,
        name: 'Yam and Stew',
        price: '700'
      }]
    };

    _chai.default.request(_index.default).post('/api/v1/menu').send(addedMenu).end(function (err, res) {
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('day');
      res.body.data.should.have.property('vendor_id');
      res.body.data.should.have.property('category');
      res.body.data.should.have.property('meals');
      console.log(res.body.data);
      done();
    });
  });
});
//# sourceMappingURL=menu.test.js.map