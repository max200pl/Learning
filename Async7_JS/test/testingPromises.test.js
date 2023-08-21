const calculateSquarePromise = require('./../testingPromises');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
const expect = chai.expect;

describe('calculateSquarePromise', function () {
    // it('should resolve with number 4 if passed 2', function (done) {
    //     this.timeout(4000) // mocha use 2seconds timeout if promise execute more than 2 seconds mocha returns false taste
    //     expect(calculateSquarePromise(2)).to.eventually.be.equal(4).notify(done);
    //     // .notify(done) -> notify in terminal test case
    //     // .eventually -> will wait until the promise becomes resolved or rejected
    // })

    this.timeout(4000) // mocha use 2seconds timeout if promise execute more than 2 seconds mocha returns false taste
    it('should resolve with number 4 if passed 2', function () {
        return (calculateSquarePromise(2)).then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
        })
    })

    it('should become  rejected of passed a string instead of a number', function () {
        return (calculateSquarePromise("string")).catch((reason) => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.equal("Argument must be a number");
        })
    })

    // it('should become fulfilled when passed number 2', function (done) {
    //     this.timeout(4000)
    //     expect(calculateSquarePromise(2)).to.eventually.be.fulfilled.notify(done);
    //     // .fulfilled to be fulfilled
    // })

    // it('should become  rejected of passed a string instead of a number ', function (done) {
    //     this.timeout(4000)
    //     expect(calculateSquarePromise("string")).to.eventually.be.rejected.notify(done);
    //     // .rejected to be rejected
    // })
})