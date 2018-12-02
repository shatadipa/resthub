var chai = require('chai');
var chaiHttp = require('chai-http');
var index = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Contacts', function () {
  it('should list ALL contacts on /contacts GET', function (done) {
    chai.request(index)
      .get('/api/contacts')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
      done();
  });
});