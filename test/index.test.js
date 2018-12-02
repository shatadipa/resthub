var chai = require('chai');
var chaiHttp = require('chai-http');
var index = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('RestHub', function () {
  it('should send 200 status code on GET /', function (done) {
    done();
  });
});