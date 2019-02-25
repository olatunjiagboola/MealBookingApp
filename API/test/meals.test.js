import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const should = chai.should();

describe('API Meals Endpoint Testing', () => {
  // Test to get all Meals
  it('should list ALL meals on / GET', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
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

describe('API Meals Endpoint Testing', () => {
  // Test to get single Meals
  it('should get a single meal on /GET/:id', (done) => {
    chai.request(app)
      .get(`/api/v1/meals/${2}`)
      .end((err, res) => {
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

describe('add a meal on / POST', () => {
  // Test to add a Meal
  it('should return the added meal', (done) => {
    const meal = {
      "name": "egusi and efo riro",
      "Price": 700
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
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

describe('update a meal on /PUT/:id', () => {
  // Test to update a Meal
  it('should return the updated meal', (done) => {
    const meal = {
      "name": "Ogi and Akara",
      "Price": 300
    };
    chai.request(app)
      .put(`/api/v1/meals/${3}`)
      .send(meal)
      .end((err, res) => {
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

describe('delete a meal on /DELETE/:id', () => {
  // Test to delete a Meal
  it('should return all meals without the deleted meal', (done) => {
    chai.request(app)
      .delete(`/api/v1/meals/${2}`)
      .end((err, res) => {
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
