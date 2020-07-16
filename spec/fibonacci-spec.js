const Rover = require('../src/fibonacci')

describe('Fibonacci', function () {
    it('should return 21 as the 7th element of the series', function () {
        expect(Rover.get(7)).toEqual(21)
    })
})
