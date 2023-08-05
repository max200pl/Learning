const calculateSquare = require('../AsyncBasic.js');
const expect = require("chai").expect;


describe('calculateSquare', function () {
    it('should return 4 if passed 2', function (done) {
        calculateSquare(2, function (error, result) {
            expect(result).to.equal(4);
            done(); // should be called when async calculation finished
        })
    })

    it("should return an error if passed a string", function (done) {
        calculateSquare("string", function (error, result) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal("Argument must be a number");
            done();
        })
    })
})