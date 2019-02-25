"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should();

describe('API Meals Endpoint Testing', function () {
  // Test to get all Meals
  it('should list ALL meals on / GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/meals').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('name');
      res.body.data[0].should.have.property('Price');
      console.log(res.body.data);
      done();
    });
  });
});
describe('API Meals Endpoint Testing', function () {
  // Test to get single Meals
  it('should get a single meal on /GET/:id', function (done) {
    _chai.default.request(_index.default).get("/api/v1/meals/".concat(2)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('name');
      res.body.data.should.have.property('Price');
      console.log(res.body.data);
      done();
    });
  });
});
describe('add a meal on / POST', function () {
  // Test to add a Meal
  it('should return the added meal', function (done) {
    var meal = {
      "name": "egusi and efo riro",
      "Price": 700
    };

    _chai.default.request(_index.default).post('/api/v1/meals').send(meal).end(function (err, res) {
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('name');
      res.body.data.should.have.property('Price');
      console.log(res.body.data);
      done();
    });
  });
});
describe('update a meal on /PUT/:id', function () {
  // Test to update a Meal
  it('should return the updated meal', function (done) {
    var meal = {
      "name": "Ogi and Akara",
      "Price": 300
    };

    _chai.default.request(_index.default).put("/api/v1/meals/".concat(3)).send(meal).end(function (err, res) {
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('Success');
      res.body.should.have.property('message').eql('Meal Updated Successfully');
      res.body.should.have.property('data');
      res.body.data.should.be.a('object');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('name');
      res.body.data.should.have.property('Price');
      console.log(res.body.data);
      done();
    });
  });
});
describe('delete a meal on /DELETE/:id', function () {
  // Test to delete a Meal
  it('should return all meals without the deleted meal', function (done) {
    _chai.default.request(_index.default).delete("/api/v1/meals/".concat(2)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql('success');
      res.body.should.have.property('message').eql('meal deleted successfully');
      res.body.data.should.be.a('array');
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('name');
      res.body.data[0].should.have.property('Price');
      console.log(res.body.data);
      done();
    });
  });
});
//# sourceMappingURL=meals.test.js.map