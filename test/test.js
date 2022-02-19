var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:80");

// UNIT test begin

<<<<<<< HEAD
describe("SAMPLE unit test",function(){

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});

=======
describe("SAMPLE unit test", function () {
  // #1 should return home page
  it("should return home page", function (done) {
    // calling home page
    server
      .get("/")
      .expect("Content-type", /text/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
});
>>>>>>> f4fdb2d510dcead6c8cee251e97860c2c8b5ad1b
