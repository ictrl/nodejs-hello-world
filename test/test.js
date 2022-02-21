var request = require("supertest");
var should = require("should");
var app = require("../index.js");

describe("GET /", function () {
  it("respond with 200 status code", function (done) {
    //navigate to root and check the the response is "Automation done"
    // request(app).get("/").expect("Automation done", done);
    request(app)
      .get("/")
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
});
