import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const should = chai.should();

describe('Order Endpoint Testing', () => {
  // Test to get all Orders
  it('should list ALL Orders on / GET', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
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

describe('add an order on / POST', () => {
  // Test to add an order
  it('should return the added order', (done) => {
    const addedOrder = {
      "customer_id": 3,
      "vendor_id": 7,
      "dateCreated": '16/02/2019',
      "meal": [
        {
          id: 9,
          name: 'Ewa agoyin and bread',
          price: '500',
        },
        {
          id: 3,
          name: 'Cucumber salad',
          price: '700',
        },
      ],
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(addedOrder)
      .end((err, res) => {
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

describe('update an order on /PUT/:id', () => {
  // Test to update an order
  it('should return the updated order', (done) => {
    const orderUpdate = {
      "meal": [
        {
          id: 10,
          name: 'Jollof rice and Chicken',
          price: '500',
        },
      ],
    };
    chai.request(app)
      .put(`/api/v1/orders/${1}`)
      .send(orderUpdate)
      .end((err, res) => {
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
