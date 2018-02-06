const main = require('../src/main.js');

describe('a sample set of tests', function() {
    it('puts the lotion on its skin', function() {
        expect(main.proofOfConcept(5)).toBe(5);
    });
});
